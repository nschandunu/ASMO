'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { TaskDifficulty } from '@/lib/generated/prisma'

export async function createVoucher(formData: FormData) {
  try {
    const title = formData.get('title') as string
    const costPoints = parseInt(formData.get('costPoints') as string)
    const code = formData.get('code') as string
    const stock = parseInt(formData.get('stock') as string)
    const expiryDate = new Date(formData.get('expiryDate') as string)

    await prisma.voucher.create({
      data: {
        title,
        cost_points: costPoints,
        code,
        stock,
        expiry_date: expiryDate,
      },
    })

    revalidatePath('/admin/shop')
    return { success: true, message: 'Voucher created successfully' }
  } catch (error) {
    console.error('Error creating voucher:', error)
    return { success: false, message: 'Failed to create voucher' }
  }
}

export async function deleteVoucher(voucherId: string) {
  try {
    await prisma.voucher.delete({
      where: { id: voucherId },
    })

    revalidatePath('/admin/shop')
    return { success: true, message: 'Voucher deleted successfully' }
  } catch (error) {
    console.error('Error deleting voucher:', error)
    return { success: false, message: 'Failed to delete voucher' }
  }
}

export async function banUser(userId: string) {
  try {
    await prisma.profile.update({
      where: { id: userId },
      data: { role: 'USER' },
    })

    revalidatePath('/admin/users')
    return { success: true, message: 'User banned successfully' }
  } catch (error) {
    console.error('Error banning user:', error)
    return { success: false, message: 'Failed to ban user' }
  }
}

export async function createTask(formData: FormData) {
  try {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string
    const difficulty = formData.get('difficulty') as TaskDifficulty
    const pointsReward = parseInt(formData.get('pointsReward') as string)

    await prisma.task.create({
      data: {
        title,
        description,
        category,
        difficulty,
        points_reward: pointsReward,
        verification_type: 'MANUAL_REVIEW',
      },
    })

    revalidatePath('/admin/tasks')
    return { success: true, message: 'Task created successfully' }
  } catch (error) {
    console.error('Error creating task:', error)
    return { success: false, message: 'Failed to create task' }
  }
}

export async function generateMonthlyReport() {
  try {
    const users = await prisma.profile.findMany({
      select: {
        username: true,
        xp_points: true,
        sustainability_score: true,
        role: true,
      },
    })

    const tasks = await prisma.task.findMany({
      select: {
        title: true,
        category: true,
        difficulty: true,
        points_reward: true,
      },
    })

    const vouchers = await prisma.voucher.findMany({
      select: {
        title: true,
        cost_points: true,
        stock: true,
      },
    })

    const csvContent = [
      'Monthly Report',
      '',
      'Users',
      'Username,XP Points,Sustainability Score,Role',
      ...users.map(u => `${u.username},${u.xp_points},${u.sustainability_score},${u.role}`),
      '',
      'Tasks',
      'Title,Category,Difficulty,Points Reward',
      ...tasks.map(t => `${t.title},${t.category},${t.difficulty},${t.points_reward}`),
      '',
      'Vouchers',
      'Title,Cost Points,Stock',
      ...vouchers.map(v => `${v.title},${v.cost_points},${v.stock}`),
    ].join('\n')

    return { success: true, data: csvContent }
  } catch (error) {
    console.error('Error generating report:', error)
    return { success: false, message: 'Failed to generate report' }
  }
}

export async function generateAdminActivityLog() {
  try {
    const logs = await prisma.auditLog.findMany({
      take: 100,
      orderBy: { createdAt: 'desc' },
      include: {
        admin: {
          select: {
            username: true,
          },
        },
      },
    })

    const csvContent = [
      'Admin Activity Log',
      '',
      'Admin,Action,Target ID,Details,Date',
      ...logs.map(log =>
        `${log.admin.username},${log.action},${log.target_id || 'N/A'},${log.details || 'N/A'},${log.createdAt.toISOString()}`
      ),
    ].join('\n')

    return { success: true, data: csvContent }
  } catch (error) {
    console.error('Error generating activity log:', error)
    return { success: false, message: 'Failed to generate activity log' }
  }
}
