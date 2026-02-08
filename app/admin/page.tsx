import { prisma } from '@/lib/prisma'
import { Package, Users, ClipboardList, TrendingUp } from 'lucide-react'

export const runtime = "nodejs"

export default async function AdminDashboard() {
  const [userCount, voucherCount, taskCount, totalXP] = await Promise.all([
    prisma.profile.count(),
    prisma.voucher.count(),
    prisma.task.count(),
    prisma.profile.aggregate({
      _sum: {
        xp_points: true,
      },
    }),
  ])

  const stats = [
    {
      label: 'Total Users',
      value: userCount,
      icon: Users,
      color: 'bg-blue-600',
    },
    {
      label: 'Active Vouchers',
      value: voucherCount,
      icon: Package,
      color: 'bg-green-600',
    },
    {
      label: 'Available Tasks',
      value: taskCount,
      icon: ClipboardList,
      color: 'bg-purple-600',
    },
    {
      label: 'Total XP Earned',
      value: totalXP._sum.xp_points || 0,
      icon: TrendingUp,
      color: 'bg-orange-600',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-gray-400 mt-1">Overview of your City NPC system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value.toLocaleString()}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/shop"
              className="block p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-white font-medium">Add New Voucher</p>
                  <p className="text-sm text-gray-400">Create shop rewards</p>
                </div>
              </div>
            </a>
            <a
              href="/admin/tasks"
              className="block p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <ClipboardList className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="text-white font-medium">Create New Task</p>
                  <p className="text-sm text-gray-400">Add sustainability missions</p>
                </div>
              </div>
            </a>
            <a
              href="/admin/users"
              className="block p-4 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-white font-medium">Manage Users</p>
                  <p className="text-sm text-gray-400">View and moderate users</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
              <div>
                <p className="text-gray-300">System initialized successfully</p>
                <p className="text-gray-500 text-xs mt-0.5">Database seeded and ready</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
              <div>
                <p className="text-gray-300">Admin panel deployed</p>
                <p className="text-gray-500 text-xs mt-0.5">Full CRUD operations available</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
              <div>
                <p className="text-gray-300">Ready for management</p>
                <p className="text-gray-500 text-xs mt-0.5">All features operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
