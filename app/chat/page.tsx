'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

interface ChatRoom {
  id: string
  name: string
  is_public: boolean
  created_at: string
}

interface MembershipStatus {
  [roomId: string]: boolean
}

export default function ChatDirectoryPage() {
  const supabase = createClient()
  const [rooms, setRooms] = useState<ChatRoom[]>([])
  const [membershipStatus, setMembershipStatus] = useState<MembershipStatus>({})
  const [loading, setLoading] = useState(true)
  const [joiningRoomId, setJoiningRoomId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)

  useEffect(() => {
    fetchRooms()
  }, [])

  async function fetchRooms() {
    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError) {
        throw new Error('Authentication error')
      }

      if (!user) {
        throw new Error('You must be logged in')
      }

      setCurrentUserId(user.id)

      const { data, error: roomsError } = await supabase
        .from('chatroom')
        .select('*')
        .order('created_at', { ascending: false })

      if (roomsError) {
        throw new Error('Failed to load chat rooms')
      }

      setRooms(data || [])

      const { data: memberData, error: memberError } = await supabase
        .from('chatroom_member')
        .select('chatroom_id')
        .eq('member_id', user.id)

      if (memberError && memberError.code !== 'PGRST116') {
        console.error('Member fetch error:', memberError)
      }

      const statusMap: MembershipStatus = {}
      data?.forEach((room) => {
        statusMap[room.id] = memberData?.some((m) => m.chatroom_id === room.id) || false
      })
      setMembershipStatus(statusMap)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Fetch rooms error:', err)
    } finally {
      setLoading(false)
    }
  }

  async function handleJoinRoom(roomId: string, isPublic: boolean, e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    if (!currentUserId) {
      setError('You must be logged in to join a room')
      return
    }

    setJoiningRoomId(roomId)
    setError(null)
    setSuccess(null)

    try {
      if (isPublic) {
        // Join public room directly - REMOVED role field
        const { error: joinError } = await supabase
          .from('chatroom_member')
          .insert({
            chatroom_id: roomId,
            member_id: currentUserId,
            // role field removed
          })

        if (joinError) {
          if (joinError.code === '23505') {
            throw new Error('You are already a member of this room')
          }
          throw new Error(`Failed to join room: ${joinError.message}`)
        }

        setSuccess('Successfully joined the room!')
        setMembershipStatus((prev) => ({ ...prev, [roomId]: true }))
        setTimeout(() => setSuccess(null), 3000)
      } else {
        const { error: requestError } = await supabase
          .from('chatroom_join_request')
          .insert({
            chatroom_id: roomId,
            user_id: currentUserId,
            status: 'pending',
          })

        if (requestError) {
          if (requestError.code === '23505') {
            throw new Error('You have already requested to join this room')
          }
          throw new Error(`Failed to request join: ${requestError.message}`)
        }

        setSuccess('Join request sent! Wait for admin approval.')
        setTimeout(() => setSuccess(null), 3000)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join room')
      setTimeout(() => setError(null), 5000)
    } finally {
      setJoiningRoomId(null)
    }
  }

  async function handleLeaveRoom(roomId: string, e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    if (!currentUserId) return

    const confirmed = window.confirm('Are you sure you want to leave this group?')
    if (!confirmed) return

    setJoiningRoomId(roomId)
    setError(null)
    setSuccess(null)

    try {
      const { error: leaveError } = await supabase
        .from('chatroom_member')
        .delete()
        .eq('chatroom_id', roomId)
        .eq('member_id', currentUserId)

      if (leaveError) {
        throw new Error(`Failed to leave room: ${leaveError.message}`)
      }

      setSuccess('You have left the group')
      setMembershipStatus((prev) => ({ ...prev, [roomId]: false }))
      setTimeout(() => setSuccess(null), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to leave room')
      setTimeout(() => setError(null), 5000)
    } finally {
      setJoiningRoomId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Chat Groups</h1>

        <Link
          href="/chat/rooms/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          + New Group
        </Link>
      </div>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center justify-between">
          <span>{success}</span>
          <button
            onClick={() => setSuccess(null)}
            className="text-green-700 hover:text-green-900 font-bold"
          >
            ×
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center justify-between">
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="text-red-700 hover:text-red-900 font-bold"
          >
            ×
          </button>
        </div>
      )}

      {rooms.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">💬</div>
          <p className="text-gray-500 mb-4">No groups created yet</p>
          <Link
            href="/chat/rooms/new"
            className="text-blue-600 hover:underline"
          >
            Create your first group
          </Link>
        </div>
      ) : (
        <ul className="space-y-3">
          {rooms.map((room) => {
            const isMember = membershipStatus[room.id]
            const isLoading = joiningRoomId === room.id

            return (
              <li
                key={room.id}
                className="border p-4 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href={isMember ? `/chat/rooms/${room.id}` : '#'}
                    className="flex-1 block"
                    onClick={(e) => {
                      if (!isMember) {
                        e.preventDefault()
                      }
                    }}
                  >
                    <h2 className="font-semibold text-lg">{room.name}</h2>
                    <p className="text-sm text-gray-500">
                      {room.is_public ? '🌐 Public' : '🔒 Private'} · Created{' '}
                      {new Date(room.created_at).toLocaleDateString()}
                    </p>
                  </Link>

                  {isMember ? (
                    <div className="flex gap-2">
                      <Link
                        href={`/chat/rooms/${room.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        Open
                      </Link>
                      <button
                        onClick={(e) => handleLeaveRoom(room.id, e)}
                        disabled={isLoading}
                        className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Leaving...' : 'Leave'}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => handleJoinRoom(room.id, room.is_public, e)}
                      disabled={isLoading}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isLoading
                        ? 'Joining...'
                        : room.is_public
                        ? 'Join'
                        : 'Request to Join'}
                    </button>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {rooms.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-600">
            {Object.values(membershipStatus).filter(Boolean).length} of {rooms.length}{' '}
            groups joined
          </p>
        </div>
      )}
    </div>
  )
}