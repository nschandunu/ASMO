'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function NewRoomPage() {
  const supabase = createClient()
  const router = useRouter()

  const [name, setName] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function createRoom(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Get authenticated user
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError) {
        throw new Error(`Authentication error: ${authError.message}`)
      }

      if (!user) {
        throw new Error('You must be logged in to create a room')
      }

      // Validate input
      if (!name.trim()) {
        throw new Error('Group name cannot be empty')
      }

      // Create chatroom
      const { data, error: insertError } = await supabase
        .from('chatroom')
        .insert({
          name: name.trim(),
          is_public: isPublic,
        })
        .select()
        .single()

      if (insertError) {
        throw new Error(`Failed to create room: ${insertError.message}`)
      }

      if (!data || !data.id) {
        throw new Error('No chatroom ID returned after creation')
      }

      console.log('Created chatroom:', data)

      // Add user as member
      const { error: memberError } = await supabase
        .from('chatroom_member')
        .insert({
          chatroom_id: data.id,  // Use id from chatroom table
          member_id: user.id,
        })

      if (memberError) {
        console.error('Member insert error:', memberError)
        
        // Rollback: delete the created chatroom
        await supabase
          .from('chatroom')
          .delete()
          .eq('id', data.id)
        
        throw new Error(`Failed to add you as member: ${memberError.message}`)
      }

      // Success - redirect
      router.push('/chat')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
      console.error('Error creating room:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Create New Group</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 relative">
          <button
            onClick={() => setError(null)}
            className="absolute top-2 right-2 text-red-700 hover:text-red-900 text-xl leading-none"
            aria-label="Close error"
          >
            ×
          </button>
          <div className="pr-8">{error}</div>
        </div>
      )}

      <form onSubmit={createRoom} className="space-y-4">
        <div>
          <label htmlFor="group-name" className="block text-sm font-medium mb-1">
            Group Name
          </label>
          <input
            id="group-name"
            type="text"
            placeholder="Enter group name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={loading}
            minLength={1}
            maxLength={100}
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            disabled={loading}
            className="w-4 h-4"
          />
          <span className="text-sm">Public Group</span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          {loading ? 'Creating...' : 'Create Group'}
        </button>
      </form>
    </div>
  )
}