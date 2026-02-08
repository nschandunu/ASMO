import { NextResponse } from 'next/server'
import { initializeCityBrain } from '@/lib/city-brain'

/**
 * POST /api/city/init
 * Initialize the City Brain (singleton)
 * This should only be called once when setting up the application
 */
export async function POST() {
  try {
    const cityBrain = await initializeCityBrain()

    return NextResponse.json({
      success: true,
      message: 'City Brain initialized successfully',
      data: cityBrain,
    })
  } catch (error) {
    console.error('Error initializing City Brain:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to initialize City Brain',
      },
      { status: 500 }
    )
  }
}
