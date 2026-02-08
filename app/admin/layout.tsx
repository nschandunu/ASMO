import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { LayoutDashboard, Package, Users, ClipboardList, FileText } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  let profile
  try {
    profile = await prisma.profile.findUnique({
      where: { id: user.id },
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-gray-900 border border-red-800 rounded-xl p-6">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Database Connection Error</h1>
          <p className="text-gray-300 mb-4">
            Cannot connect to the database. Please check:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
            <li>Your Supabase project is running (not paused)</li>
            <li>DATABASE_URL in .env.local is correct</li>
            <li>Network connection is stable</li>
          </ul>
          <p className="text-sm text-gray-500">
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </div>
    )
  }

  if (!profile || profile.role !== 'ADMIN') {
    redirect('/')
  }

  const navItems = [
    {
      href: '/admin',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: '/admin/shop',
      label: 'Shop Manager',
      icon: Package,
    },
    {
      href: '/admin/users',
      label: 'User Tracker',
      icon: Users,
    },
    {
      href: '/admin/tasks',
      label: 'Task Creator',
      icon: ClipboardList,
    },
    {
      href: '/admin/reports',
      label: 'Reports Center',
      icon: FileText,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-800 fixed left-0 top-0">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-blue-500">Admin Panel</h1>
            <p className="text-sm text-gray-400 mt-1">City NPC Management</p>
          </div>

          <nav className="px-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors group"
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {profile.username.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{profile.username}</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
