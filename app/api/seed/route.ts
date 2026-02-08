import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST() {
  try {
    const existingTasks = await prisma.task.count()

    if (existingTasks > 0) {
      return NextResponse.json({
        success: false,
        error: 'Database already has tasks. Delete them first if you want to re-seed.',
        existingCount: existingTasks,
      })
    }

    const tasks = await prisma.task.createMany({
      data: [
        // WATER category
        {
          title: 'Report a water leak in your neighborhood',
          description: 'Help conserve water by reporting any leaks you spot. Take a photo and share the location.',
          category: 'Water',
          difficulty: 'EASY',
          points_reward: 15,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Install a rainwater harvesting system',
          description: 'Set up a system to collect and reuse rainwater for gardening or cleaning.',
          category: 'Water',
          difficulty: 'HARD',
          points_reward: 100,
          verification_type: 'MANUAL_REVIEW',
        },

        // WASTE category
        {
          title: 'Organize a neighborhood cleanup',
          description: 'Gather your neighbors and clean up litter in your community. Share before/after photos!',
          category: 'Waste',
          difficulty: 'HARD',
          points_reward: 80,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Start composting at home',
          description: 'Begin composting your organic waste. Take a photo of your compost bin or pile.',
          category: 'Waste',
          difficulty: 'MEDIUM',
          points_reward: 40,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Use reusable bags for shopping',
          description: 'Skip plastic bags and bring your own reusable bags. Show us your eco-friendly shopping!',
          category: 'Waste',
          difficulty: 'EASY',
          points_reward: 10,
          verification_type: 'MANUAL_REVIEW',
        },

        // TRANSPORT category
        {
          title: 'Walk or cycle to work today',
          description: 'Choose an eco-friendly commute! Track your route and share your experience.',
          category: 'Transport',
          difficulty: 'EASY',
          points_reward: 20,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Use public transportation for a week',
          description: 'Commit to using buses, trains, or carpools for 7 days straight.',
          category: 'Transport',
          difficulty: 'MEDIUM',
          points_reward: 50,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Report a damaged road or sidewalk',
          description: 'Help improve city infrastructure by reporting potholes, cracks, or unsafe pathways.',
          category: 'Transport',
          difficulty: 'EASY',
          points_reward: 15,
          verification_type: 'MANUAL_REVIEW',
        },

        // AIR QUALITY category
        {
          title: 'Plant a tree in your community',
          description: 'Trees clean the air! Plant one and watch it grow. Share a photo.',
          category: 'Air',
          difficulty: 'MEDIUM',
          points_reward: 60,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Report illegal burning or pollution',
          description: 'See smoke or pollution? Report it with location and photos to help keep our air clean.',
          category: 'Air',
          difficulty: 'EASY',
          points_reward: 25,
          verification_type: 'MANUAL_REVIEW',
        },

        // ENERGY category
        {
          title: 'Switch to LED bulbs in your home',
          description: 'Replace old bulbs with energy-efficient LEDs. Show us your new setup!',
          category: 'Energy',
          difficulty: 'EASY',
          points_reward: 20,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Unplug devices when not in use',
          description: 'Reduce phantom power! Share tips on how you saved energy this week.',
          category: 'Energy',
          difficulty: 'EASY',
          points_reward: 10,
          verification_type: 'MANUAL_REVIEW',
        },
        {
          title: 'Install solar panels or renewable energy',
          description: 'Go green with solar, wind, or other renewable energy sources for your home.',
          category: 'Energy',
          difficulty: 'HARD',
          points_reward: 150,
          verification_type: 'MANUAL_REVIEW',
        },
      ],
    })

    // Create a sample voucher
    const voucher = await prisma.voucher.create({
      data: {
        title: '50MB Data Voucher',
        cost_points: 100,
        code: 'DATA50-' + Math.random().toString(36).substring(7).toUpperCase(),
        stock: 10,
        expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!',
      data: {
        tasksCreated: tasks.count,
        vouchersCreated: 1,
        voucher: {
          title: voucher.title,
          cost: voucher.cost_points,
        },
      },
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to seed database',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/seed
 * Clear all tasks and vouchers (for testing)
 */
export async function DELETE() {
  try {
    // Delete in order due to foreign key constraints
    await prisma.userTaskProgress.deleteMany()
    await prisma.transaction.deleteMany()
    await prisma.task.deleteMany()
    await prisma.voucher.deleteMany()

    return NextResponse.json({
      success: true,
      message: 'All tasks and vouchers deleted successfully',
    })
  } catch (error) {
    console.error('Error clearing database:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to clear database',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
