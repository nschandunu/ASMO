'use client'

import { useState, useTransition } from 'react'
import { banUser } from '../actions'
import { Shield, Ban, Eye, ChevronDown, ChevronUp } from 'lucide-react'
import type { Profile, UserTaskProgress, Task } from '@/lib/generated/prisma'

type UserWithTasks = Profile & {
  userTaskProgress: (UserTaskProgress & { task: Task })[]
}

export function UserTable({ users }: { users: UserWithTasks[] }) {
  const [isPending, startTransition] = useTransition()
  const [expandedUser, setExpandedUser] = useState<string | null>(null)

  const handleBan = async (userId: string, username: string) => {
    if (!confirm(`Are you sure you want to ban user "${username}"?`)) return

    startTransition(async () => {
      const result = await banUser(userId)
      if (result.success) {
        alert(result.message)
      } else {
        alert(result.message)
      }
    })
  }

  const toggleExpand = (userId: string) => {
    setExpandedUser(expandedUser === userId ? null : userId)
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 border-b border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                XP
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sustainability Score
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {users.map((user) => (
              <>
                <tr key={user.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-white font-medium">{user.username}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-300">{user.xp_points}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.sustainability_score === 'LEADING' || user.sustainability_score === 'POSITIVE_IMPACT'
                          ? 'bg-green-900/50 text-green-300'
                          : user.sustainability_score === 'STABLE' || user.sustainability_score === 'EFFICIENT'
                          ? 'bg-blue-900/50 text-blue-300'
                          : user.sustainability_score === 'DEVELOPING' || user.sustainability_score === 'IMPROVING'
                          ? 'bg-yellow-900/50 text-yellow-300'
                          : 'bg-red-900/50 text-red-300'
                      }`}
                    >
                      {user.sustainability_score.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {user.role === 'ADMIN' && <Shield className="w-4 h-4 text-blue-500" />}
                      <span className={user.role === 'ADMIN' ? 'text-blue-400' : 'text-gray-400'}>
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(user.id)}
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="View details"
                      >
                        {expandedUser === user.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={() => handleBan(user.id, user.username)}
                        disabled={isPending || user.role === 'ADMIN'}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Ban user"
                      >
                        <Ban className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {expandedUser === user.id && (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 bg-gray-800/50">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-white mb-3">Recent Task Activity</h4>
                        {user.userTaskProgress.length > 0 ? (
                          <div className="space-y-2">
                            {user.userTaskProgress.map((progress) => (
                              <div
                                key={progress.id}
                                className="flex items-center justify-between p-3 bg-gray-900 rounded-lg"
                              >
                                <div className="flex-1">
                                  <p className="text-white text-sm font-medium">{progress.task.title}</p>
                                  <p className="text-gray-400 text-xs mt-0.5">
                                    {progress.task.category} • {progress.task.difficulty}
                                  </p>
                                </div>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    progress.status === 'VERIFIED'
                                      ? 'bg-green-900/50 text-green-300'
                                      : progress.status === 'SUBMITTED'
                                      ? 'bg-blue-900/50 text-blue-300'
                                      : progress.status === 'REJECTED'
                                      ? 'bg-red-900/50 text-red-300'
                                      : 'bg-gray-700 text-gray-300'
                                  }`}
                                >
                                  {progress.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm">No recent task activity</p>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {users.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No users found</p>
        </div>
      )}
    </div>
  )
}
