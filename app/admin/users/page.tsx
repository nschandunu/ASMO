import { prisma } from '@/lib/prisma'
import { UserTable } from './user-table'

export default async function UserTracker() {
  const users = await prisma.profile.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      userTaskProgress: {
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          task: true,
        },
      },
    },
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">User Tracker</h1>
        <p className="text-gray-400 mt-1">Manage and monitor all users in the system</p>
      </div>

      <UserTable users={users} />
    </div>
  )
}
