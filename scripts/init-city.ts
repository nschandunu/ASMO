/**
 * Script to initialize the City Brain
 * Run this once to set up the City NPC
 *
 * Usage: npx tsx scripts/init-city.ts
 */

import { initializeCityBrain, getCityBrain } from '@/lib/city-brain'

async function main() {
  console.log('🌆 Initializing City Brain...\n')

  try {
    const cityBrain = await initializeCityBrain()

    console.log('✅ City Brain initialized successfully!')
    console.log('\n📊 City Stats:')
    console.log('  ID:', cityBrain.id)
    console.log('  Mood:', cityBrain.mood)
    console.log('  Health Stats:', JSON.stringify(cityBrain.health_stats, null, 2))
    console.log('  Last Updated:', cityBrain.last_updated)

    console.log('\n🎮 You can now:')
    console.log('  1. Start your dev server: npm run dev')
    console.log('  2. Test the API: curl http://localhost:3000/api/city')
    console.log('  3. Build the dashboard to see the City Brain in action!')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

main()
