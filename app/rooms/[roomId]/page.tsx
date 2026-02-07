'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { RealtimeChannel } from '@supabase/supabase-js'

interface Message {
  id: number
  text: string
  created_at: string
  author_id: string
  chatroom_id?: string
}

interface Chatroom {
  id: string
  name: string
  is_public: boolean
  created_at: string
}

export default function ChatRoomPage() {
  const params = useParams()
  const router = useRouter()
  const supabase = createClient()
  const roomId = params.roomId as string

  const [chatroom, setChatroom] = useState<Chatroom | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [isOnline, setIsOnline] = useState(true)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const channelRef = useRef<RealtimeChannel | null>(null)
  const MAX_RETRIES = 3

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        // Validate roomId
        if (!roomId || typeof roomId !== 'string') {
          throw new Error('Invalid chatroom ID')
        }

        // Get authenticated user
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser()

        if (authError) {
          throw new Error(`Authentication error: ${authError.message}`)
        }

        if (!user) {
          setError('You must be logged in to view this chat')
          router.push('/login')
          return
        }

        setCurrentUserId(user.id)

        // Verify user is a member of this chatroom
        const { data: memberData, error: memberError } = await supabase
          .from('chatroom_member')
          .select('chatroom_id')
          .eq('chatroom_id', roomId)
          .eq('member_id', user.id)
          .single()

        if (memberError && memberError.code !== 'PGRST116') {
          console.error('Member check error:', memberError)
        }

        if (!memberData) {
          throw new Error('You are not a member of this chatroom')
        }

        // Fetch chatroom details
        const { data: roomData, error: roomError } = await supabase
          .from('chatroom')
          .select('*')
          .eq('id', roomId)
          .single()

        if (roomError) {
          if (roomError.code === 'PGRST116') {
            throw new Error('Chatroom not found')
          }
          throw new Error(`Failed to load chatroom: ${roomError.message}`)
        }

        if (!roomData) {
          throw new Error('Chatroom data is empty')
        }

        setChatroom(roomData)

        // Fetch messages
        const { data: messagesData, error: messagesError } = await supabase
          .from('message')
          .select('*')
          .eq('chatroom_id', roomId)
          .order('created_at', { ascending: true })
          .limit(100) // Limit initial load

        if (messagesError) {
          // PGRST116 means no rows found, which is fine for a new room
          if (messagesError.code !== 'PGRST116') {
            console.error('Messages fetch error:', messagesError)
            throw new Error(`Failed to load messages: ${messagesError.message}`)
          }
        }

        setMessages(messagesData || [])
        setError(null)
        setRetryCount(0)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load chat'
        setError(errorMessage)
        console.error('Fetch error:', err)

        // Retry logic for network errors
        if (
          err instanceof Error &&
          (err.message.includes('fetch') || err.message.includes('network')) &&
          retryCount < MAX_RETRIES
        ) {
          setTimeout(() => {
            setRetryCount((prev) => prev + 1)
            fetchData()
          }, 2000 * (retryCount + 1)) // Exponential backoff
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Cleanup function for realtime subscription
    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
        channelRef.current = null
      }
    }
  }, [roomId, supabase, router, retryCount])

  // Separate useEffect for realtime subscription
  useEffect(() => {
    if (!roomId || !currentUserId || !chatroom) return

    try {
      // Remove existing channel if any
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
      }

      // Subscribe to new messages
      const channel = supabase
        .channel(`room:${roomId}`)
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'message',
            filter: `chatroom_id=eq.${roomId}`,
          },
          (payload) => {
            console.log('New message received:', payload)
            setMessages((current) => {
              // Prevent duplicates
              const exists = current.some((msg) => msg.id === payload.new.id)
              if (exists) return current
              return [...current, payload.new as Message]
            })
          }
        )
        .on('system', {}, (payload) => {
          // Handle subscription status
          console.log('Subscription status:', payload)
        })
        .subscribe((status, err) => {
          if (err) {
            console.error('Subscription error:', err)
            setError('Real-time updates unavailable. Messages will not update automatically.')
          }
          if (status === 'SUBSCRIBED') {
            console.log('Successfully subscribed to room updates')
          }
        })

      channelRef.current = channel
    } catch (err) {
      console.error('Failed to setup realtime subscription:', err)
      setError('Real-time updates unavailable')
    }

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
        channelRef.current = null
      }
    }
  }, [roomId, currentUserId, chatroom, supabase])

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()

    // Validation
    if (!newMessage.trim()) {
      setError('Message cannot be empty')
      return
    }

    if (!currentUserId) {
      setError('You must be logged in to send messages')
      return
    }

    if (!isOnline) {
      setError('No internet connection. Please check your network.')
      return
    }

    if (newMessage.trim().length > 5000) {
      setError('Message is too long (max 5000 characters)')
      return
    }

    setSending(true)
    setError(null)

    const messageText = newMessage.trim()
    const tempId = Date.now() // Temporary ID for optimistic update

    try {
      // Optimistic update - add message immediately to UI
      const optimisticMessage: Message = {
        id: tempId,
        text: messageText,
        created_at: new Date().toISOString(),
        author_id: currentUserId,
        chatroom_id: roomId,
      }

      setMessages((current) => [...current, optimisticMessage])
      setNewMessage('') // Clear input immediately

      // Send to database
      const { data, error: insertError } = await supabase
        .from('message')
        .insert({
          chatroom_id: roomId,
          author_id: currentUserId,
          text: messageText,
        })
        .select()
        .single()

      if (insertError) {
        // Remove optimistic message on error
        setMessages((current) => current.filter((msg) => msg.id !== tempId))
        
        if (insertError.code === '23503') {
          throw new Error('Invalid chatroom or user reference')
        } else if (insertError.code === '42501') {
          throw new Error('Permission denied. You may not have access to send messages.')
        } else {
          throw new Error(`Failed to send message: ${insertError.message}`)
        }
      }

      if (!data) {
        // Remove optimistic message if no data returned
        setMessages((current) => current.filter((msg) => msg.id !== tempId))
        throw new Error('No data returned after sending message')
      }

      // Replace optimistic message with real one
      setMessages((current) =>
        current.map((msg) => (msg.id === tempId ? data : msg))
      )
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message'
      setError(errorMessage)
      console.error('Send message error:', err)
      
      // Restore message to input on error
      setNewMessage(messageText)
    } finally {
      setSending(false)
    }
  }

  function retryLoadChat() {
    setLoading(true)
    setError(null)
    setRetryCount(0)
    window.location.reload()
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <div className="text-lg text-gray-600">Loading chatroom...</div>
        {retryCount > 0 && (
          <div className="text-sm text-gray-500 mt-2">
            Retry attempt {retryCount} of {MAX_RETRIES}
          </div>
        )}
      </div>
    )
  }

  // Error state (fatal - no chatroom loaded)
  if (error && !chatroom) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="text-red-600 text-6xl mb-4 text-center">⚠️</div>
          <h1 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Unable to Load Chatroom
          </h1>
          <p className="text-gray-600 text-center mb-6">{error}</p>
          <div className="flex gap-3">
            <button
              onClick={retryLoadChat}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
            <button
              onClick={() => router.push('/chat')}
              className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Back to Chats
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Main chat interface
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3 shadow-sm">
        <button
          onClick={() => router.push('/chat')}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Back to chats"
        >
          ← Back
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-lg text-gray-900">{chatroom?.name}</h1>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-500">
              {chatroom?.is_public ? '🌐 Public' : '🔒 Private'} Group
            </p>
            {!isOnline && (
              <span className="text-xs text-red-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                Offline
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-4">💬</div>
            <p className="text-gray-500 text-lg">No messages yet</p>
            <p className="text-gray-400 text-sm">Start the conversation!</p>
          </div>
        ) : (
          <>
            {messages.map((message, index) => {
              const isOwn = message.author_id === currentUserId
              const showTimestamp =
                index === 0 ||
                new Date(message.created_at).getTime() -
                  new Date(messages[index - 1].created_at).getTime() >
                  300000 // 5 minutes

              return (
                <div key={message.id}>
                  {showTimestamp && (
                    <div className="text-center text-xs text-gray-400 my-4">
                      {new Date(message.created_at).toLocaleString()}
                    </div>
                  )}
                  <div
                    className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${
                        isOwn
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-900 border'
                      }`}
                    >
                      <p className="break-words whitespace-pre-wrap">
                        {message.text}
                      </p>
                      <p className={`text-xs mt-1 ${isOwn ? 'text-blue-100' : 'text-gray-400'}`}>
                        {new Date(message.created_at).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Error banner */}
      {error && chatroom && (
        <div className="bg-red-100 border-t border-red-400 text-red-700 px-4 py-2 text-sm flex items-center justify-between">
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="text-red-700 hover:text-red-900 font-bold"
            aria-label="Dismiss error"
          >
            ×
          </button>
        </div>
      )}

      {/* Offline banner */}
      {!isOnline && (
        <div className="bg-yellow-100 border-t border-yellow-400 text-yellow-800 px-4 py-2 text-sm text-center">
          You are offline. Messages will be sent when connection is restored.
        </div>
      )}

      {/* Input form */}
      <form
        onSubmit={sendMessage}
        className="bg-white border-t px-4 py-3 flex gap-2 shadow-lg"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={isOnline ? 'Type a message...' : 'Offline - cannot send messages'}
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          disabled={sending || !isOnline}
          maxLength={5000}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={sending || !newMessage.trim() || !isOnline}
          className="bg-blue-600 text-white px-6 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors font-medium"
          aria-label="Send message"
        >
          {sending ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              Sending...
            </span>
          ) : (
            'Send'
          )}
        </button>
      </form>
    </div>
  )
}
