// Check current user profiles and roles
require('dotenv').config({ path: '.env.local' })
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

async function checkProfiles() {
  try {
    const result = await pool.query('SELECT id, username, role FROM profiles ORDER BY "createdAt" DESC LIMIT 10')
    
    if (result.rows.length === 0) {
      console.log('❌ No profiles found in database')
    } else {
      console.log('✅ Profiles found:')
      console.table(result.rows)
    }
    
    const adminCount = result.rows.filter(p => p.role === 'ADMIN').length
    console.log(`\nAdmins: ${adminCount}`)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  } finally {
    await pool.end()
  }
}

checkProfiles()
