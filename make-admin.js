// Promote a user to ADMIN role
require('dotenv').config({ path: '.env.local' })
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

const username = process.argv[2]

if (!username) {
  console.log('Usage: node make-admin.js <username>')
  console.log('\nAvailable users:')
  console.log('  - ranasingheasila')
  console.log('  - manuja2349210a')
  console.log('  - teamxceylon')
  process.exit(1)
}

async function makeAdmin() {
  try {
    const result = await pool.query(
      "UPDATE profiles SET role = 'ADMIN' WHERE username = $1 RETURNING id, username, role",
      [username]
    )
    
    if (result.rows.length === 0) {
      console.log(`❌ User "${username}" not found`)
    } else {
      console.log('✅ Admin promotion successful!')
      console.table(result.rows)
      console.log(`\n🎉 ${username} is now an ADMIN!`)
    }
  } catch (error) {
    console.error('❌ Error:', error.message)
  } finally {
    await pool.end()
  }
}

makeAdmin()
