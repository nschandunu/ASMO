'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  ArrowLeft, 
  Send, 
  Globe, 
  Lock, 
  WifiOff, 
  AlertCircle,
  Hash,
  Clock,
  Terminal,
  Leaf, 
  Bus, 
  Recycle,
  Heart
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import type { RealtimeChannel } from '@supabase/supabase-js'

// Component Imports
import { LoadingScreen } from "@/components/loading-screen"

// --- Interfaces (UNCHANGED) ---
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

/* ═══════════════════════════════════════════════════════════════════════════
   VISUAL DECORATIONS
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

const FloatingSDGIcons = () => {
  const icons = [
    { Icon: Leaf, color: "#22C55E", x: "5%", y: "15%" },
    { Icon: Building2, color: "#38BDF8", x: "90%", y: "10%" },
    { Icon: Bus, color: "#FD9D24", x: "15%", y: "80%" },
    { Icon: Recycle, color: "#8B5CF6", x: "85%", y: "85%" },
  ];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <item.Icon size={32} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

export default function ChatRoomPage() {
  // --- Original Hooks & State (UNCHANGED) ---
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

  // --- Original Functions (UNCHANGED) ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => { scrollToBottom() }, [messages])

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
        if (!roomId || typeof roomId !== 'string') throw new Error('Invalid chatroom ID')
        const { data: { user }, error: authError } = await supabase.auth.getUser()
        if (authError) throw new Error(`Authentication error: ${authError.message}`)
        if (!user) { setError('You must be logged in to view this chat'); router.push('/login'); return; }
        setCurrentUserId(user.id)

        const { data: memberData } = await supabase.from('chatroom_member').select('chatroom_id').eq('chatroom_id', roomId).eq('member_id', user.id).single()
        if (!memberData) throw new Error('You are not a member of this neighborhood')

        const { data: roomData, error: roomError } = await supabase.from('chatroom').select('*').eq('id', roomId).single()
        if (roomError) throw new Error(`Failed to load: ${roomError.message}`)
        setChatroom(roomData)

        const { data: messagesData } = await supabase.from('message').select('*').eq('chatroom_id', roomId).order('created_at', { ascending: true }).limit(100)
        setMessages(messagesData || [])
        setError(null); setRetryCount(0)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load chat'
        setError(errorMessage)
        if (retryCount < MAX_RETRIES) setTimeout(() => { setRetryCount(p => p + 1); fetchData() }, 2000 * (retryCount + 1))
      } finally { setLoading(false) }
    }
    fetchData()
    return () => { if (channelRef.current) supabase.removeChannel(channelRef.current) }
  }, [roomId, supabase, router, retryCount])

  useEffect(() => {
    if (!roomId || !currentUserId || !chatroom) return
    try {
      if (channelRef.current) supabase.removeChannel(channelRef.current)
      const channel = supabase.channel(`room:${roomId}`)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'message', filter: `chatroom_id=eq.${roomId}` }, 
        (payload) => {
          setMessages((current) => {
            const exists = current.some((msg) => msg.id === payload.new.id)
            if (exists) return current
            return [...current, payload.new as Message]
          })
        })
        .subscribe()
      channelRef.current = channel
    } catch (err) { setError('Real-time updates unavailable') }
  }, [roomId, currentUserId, chatroom, supabase])

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!newMessage.trim() || !currentUserId || !isOnline) return
    setSending(true); setError(null)
    const messageText = newMessage.trim()
    const tempId = Date.now()
    try {
      const optimisticMessage: Message = { id: tempId, text: messageText, created_at: new Date().toISOString(), author_id: currentUserId, chatroom_id: roomId }
      setMessages((current) => [...current, optimisticMessage]); setNewMessage('')
      const { data, error: insertError } = await supabase.from('message').insert({ chatroom_id: roomId, author_id: currentUserId, text: messageText }).select().single()
      if (insertError) {
        setMessages((current) => current.filter((msg) => msg.id !== tempId))
        throw new Error(insertError.message)
      }
      setMessages((current) => current.map((msg) => (msg.id === tempId ? data : msg)))
    } catch (err: any) { setError(err.message); setNewMessage(messageText) } finally { setSending(false) }
  }

  function retryLoadChat() { setLoading(true); setError(null); setRetryCount(0); window.location.reload() }

  // --- Render (REDESIGNED) ---
  return (
    <LoadingScreen>
      <div 
        className="relative h-screen w-full bg-[#0F172A] overflow-hidden flex flex-col"
        style={{ cursor: SDG_CURSOR }}
      >
        <FloatingSDGIcons />

        {/* ── HEADER ────────────────────────────────────────────────── */}
        <header className="relative z-20 bg-[#1E293B]/40 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.push('/chat')}
              className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-[#38BDF8] transition-colors"
            >
              <ArrowLeft size={20} />
            </motion.button>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-[#38BDF8]" />
                <h1 className="font-black text-white uppercase tracking-tighter text-lg">{chatroom?.name}</h1>
              </div>
              <div className="flex items-center gap-3">
                <span className={`flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full ${chatroom?.is_public ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#FD9D24]/10 text-[#FD9D24]'}`}>
                  {chatroom?.is_public ? <Globe size={8} /> : <Lock size={8} />}
                  {chatroom?.is_public ? 'INCLUSIVE_ZONE' : 'RESTRICTED_ACCESS'}
                </span>
                {!isOnline && (
                  <span className="text-[9px] text-red-500 font-mono animate-pulse flex items-center gap-1">
                    <WifiOff size={8} /> OFFLINE_MODE
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/5 text-[#22C55E] text-[9px] font-bold tracking-widest uppercase">
            <Heart size={10} className="fill-current" />
            SDG 11 Resilient
          </div>
        </header>

        {/* ── MESSAGES FEED ─────────────────────────────────────────── */}
        <main className="relative flex-grow overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-hide">
          {error && !chatroom ? (
             <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/5 backdrop-blur-md rounded-[3rem] border border-red-500/20 max-w-md mx-auto my-20">
               <AlertCircle size={48} className="text-red-500 mb-4" />
               <h2 className="text-white font-bold mb-2">Neighborhood Sync Failed</h2>
               <p className="text-slate-400 text-sm mb-6">{error}</p>
               <button onClick={retryLoadChat} className="bg-[#38BDF8] text-slate-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Retry Uplink</button>
             </div>
          ) : messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30 grayscale pointer-events-none">
              <Terminal size={64} className="text-slate-500 mb-4" />
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-400">Awaiting first transmission...</p>
            </div>
          ) : (
            <>
              {messages.map((message, index) => {
                const isOwn = message.author_id === currentUserId
                const showTimestamp = index === 0 || new Date(message.created_at).getTime() - new Date(messages[index - 1].created_at).getTime() > 300000

                return (
                  <div key={message.id} className="w-full">
                    {showTimestamp && (
                      <div className="flex items-center gap-4 my-8 opacity-40">
                        <div className="h-[1px] flex-grow bg-slate-700" />
                        <span className="text-[10px] font-mono text-slate-400 tracking-widest flex items-center gap-2">
                          <Clock size={10} /> {new Date(message.created_at).toLocaleString()}
                        </span>
                        <div className="h-[1px] flex-grow bg-slate-700" />
                      </div>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`group relative max-w-[85%] md:max-w-[70%] px-5 py-3 rounded-2xl shadow-xl transition-all ${
                        isOwn 
                          ? 'bg-gradient-to-br from-[#FD9D24] to-[#F59E0B] text-black rounded-tr-none' 
                          : 'bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-tl-none hover:bg-white/10'
                      }`}>
                        {!isOwn && (
                          <div className="text-[9px] font-mono mb-1 text-[#38BDF8] flex items-center gap-1 uppercase tracking-tighter">
                            <Hash size={8} /> contrib_{message.author_id.slice(0, 4)}
                          </div>
                        )}
                        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words font-medium italic">
                          "{message.text}"
                        </p>
                        <div className={`text-[8px] mt-2 font-mono uppercase tracking-widest text-right opacity-60 ${isOwn ? 'text-black' : 'text-slate-400'}`}>
                          {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
              <div ref={messagesEndRef} className="h-4" />
            </>
          )}
        </main>

        {/* ── INPUT HUB ─────────────────────────────────────────────── */}
        <footer className="relative z-20 bg-[#0F172A]/80 backdrop-blur-2xl border-t border-white/5 p-4 md:p-6">
          <form onSubmit={sendMessage} className="max-w-4xl mx-auto relative group">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={isOnline ? "Contribute to neighborhood dialogue..." : "System Offline..."}
              className="w-full bg-[#1E293B] border border-white/10 rounded-full py-4 pl-6 pr-20 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50 focus:border-transparent transition-all disabled:opacity-50"
              disabled={sending || !isOnline}
              maxLength={5000}
              autoComplete="off"
            />
            
            <motion.button
              type="submit"
              disabled={sending || !newMessage.trim() || !isOnline}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-gradient-to-r from-[#38BDF8] to-blue-600 rounded-full text-white shadow-lg disabled:grayscale disabled:opacity-30 transition-all"
            >
              {sending ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </motion.button>

            {/* Visual Status Indicator */}
            <div className="absolute -top-8 left-4">
               <AnimatePresence>
                {error && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[9px] text-red-400 font-mono flex items-center gap-1 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded-md border border-red-500/20">
                    <AlertCircle size={10} /> {error.slice(0, 40)}...
                  </motion.div>
                )}
               </AnimatePresence>
            </div>
          </form>

          {/* SDG Footnote */}
          <div className="mt-4 flex justify-center items-center gap-4 text-slate-600 font-mono text-[8px] uppercase tracking-[0.4em]">
             <span>Encrypted Transmission</span>
             <div className="w-1 h-1 rounded-full bg-slate-800" />
             <span>Inclusive Settlement Hub</span>
          </div>
        </footer>
      </div>
    </LoadingScreen>
  )
}