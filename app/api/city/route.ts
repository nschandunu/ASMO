import { NextResponse } from 'next/server'
import { getCityBrain, getCityMemories } from '@/lib/city-brain'

/**
 * GET /api/city
 * Get the current City Brain state and recent memories
 */
export async function GET() {
  try {
    const cityBrain = await getCityBrain()

    if (!cityBrain) {
      return NextResponse.json(
        {
          success: false,
          error: 'City Brain not initialized. Please call /api/city/init first.',
        },
        { status: 404 }
      )
    }

    const memories = await getCityMemories(5)

    return NextResponse.json({
      success: true,
      data: {
        city: cityBrain,
        recentMemories: memories,
      },
    })
  } catch (error) {
    console.error('Error fetching City Brain:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch City Brain',
      },
      { status: 500 }
    )
  }
}
