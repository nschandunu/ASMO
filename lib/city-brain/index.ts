import { prisma } from '@/lib/prisma'
import { CityMood } from '@/lib/generated/prisma'

export interface CityHealthStats {
  water: number // 0-100
  waste: number // 0-100
  air: number // 0-100
  transport: number // 0-100
  energy: number // 0-100
}

export interface CityBrain {
  id: string
  mood: CityMood
  health_stats: CityHealthStats
  last_updated: Date
}

const CITY_BRAIN_ID = '00000000-0000-0000-0000-000000000001' // Singleton ID

/**
 * Initialize the City Brain with default values
 * This should only be called once when the app is first set up
 */
export async function initializeCityBrain(): Promise<CityBrain> {
  // Check if City Brain already exists
  const existing = await prisma.cityState.findUnique({
    where: { id: CITY_BRAIN_ID },
  })

  if (existing) {
    return existing as unknown as CityBrain
  }

  // Create new City Brain with default values
  const cityBrain = await prisma.cityState.create({
    data: {
      id: CITY_BRAIN_ID,
      mood: 'NEUTRAL',
      health_stats: {
        water: 50,
        waste: 50,
        air: 50,
        transport: 50,
        energy: 50,
      },
      last_updated: new Date(),
    },
  })

  // Create initial memory
  await prisma.cityMemory.create({
    data: {
      event_type: 'INITIALIZATION',
      description: 'The City NPC has awakened! Citizens can now start helping improve the city.',
      impact_score: 0,
    },
  })

  return cityBrain as unknown as CityBrain
}

/**
 * Get the current City Brain state
 */
export async function getCityBrain(): Promise<CityBrain | null> {
  const cityBrain = await prisma.cityState.findUnique({
    where: { id: CITY_BRAIN_ID },
  })

  return cityBrain as unknown as CityBrain | null
}

/**
 * Update City Brain mood based on overall health
 */
export function calculateCityMood(health: CityHealthStats): CityMood {
  const average = (health.water + health.waste + health.air + health.transport + health.energy) / 5

  if (average >= 80) return 'HAPPY'
  if (average >= 50) return 'NEUTRAL'
  if (average >= 30) return 'NEGLECTED'
  return 'ANGRY'
}

/**
 * Update City Brain health stats and mood
 */
export async function updateCityHealth(
  category: keyof CityHealthStats,
  change: number,
  eventDescription: string
): Promise<CityBrain> {
  const cityBrain = await getCityBrain()

  if (!cityBrain) {
    throw new Error('City Brain not initialized')
  }

  const currentHealth = cityBrain.health_stats as CityHealthStats

  // Update the specific health metric (keep between 0-100)
  const newValue = Math.max(0, Math.min(100, currentHealth[category] + change))
  const updatedHealth: CityHealthStats = {
    ...currentHealth,
    [category]: newValue,
  }

  // Calculate new mood
  const newMood = calculateCityMood(updatedHealth)

  // Update City Brain
  const updated = await prisma.cityState.update({
    where: { id: CITY_BRAIN_ID },
    data: {
      mood: newMood,
      health_stats: JSON.parse(JSON.stringify(updatedHealth)),
      last_updated: new Date(),
    },
  })

  // Create memory of this event
  await prisma.cityMemory.create({
    data: {
      event_type: category.toUpperCase(),
      description: eventDescription,
      impact_score: Math.round(change),
    },
  })

  return updated as unknown as CityBrain
}

/**
 * Get recent city memories
 */
export async function getCityMemories(limit: number = 10) {
  return await prisma.cityMemory.findMany({
    orderBy: { created_at: 'desc' },
    take: limit,
  })
}
