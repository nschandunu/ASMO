'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [cityData, setCityData] = useState<any>(null)

  const initializeCity = async () => {
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/city/init', {
        method: 'POST',
      })
      const data = await response.json()

      if (data.success) {
        setMessage('✅ City Brain initialized successfully!')
        setCityData(data.data)
      } else {
        setMessage('❌ Error: ' + data.error)
      }
    } catch (error) {
      setMessage('❌ Error: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const fetchCityState = async () => {
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/city')
      const data = await response.json()

      if (data.success) {
        setMessage('✅ City Brain data fetched!')
        setCityData(data.data)
      } else {
        setMessage('❌ Error: ' + data.error)
      }
    } catch (error) {
      setMessage('❌ Error: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const seedDatabase = async () => {
    if (!confirm('This will create 13 sample tasks and 1 voucher. Continue?')) {
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/seed', {
        method: 'POST',
      })
      const data = await response.json()

      if (data.success) {
        setMessage(`✅ Database seeded! Created ${data.data.tasksCreated} tasks and ${data.data.vouchersCreated} voucher.`)
      } else {
        setMessage('❌ Error: ' + data.error)
      }
    } catch (error) {
      setMessage('❌ Error: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const clearDatabase = async () => {
    if (!confirm('⚠️ This will DELETE all tasks and vouchers. Are you sure?')) {
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/seed', {
        method: 'DELETE',
      })
      const data = await response.json()

      if (data.success) {
        setMessage('✅ Database cleared successfully!')
      } else {
        setMessage('❌ Error: ' + data.error)
      }
    } catch (error) {
      setMessage('❌ Error: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">City NPC Admin Panel</h1>
        <p className="text-gray-600 mb-8">Initialize and manage the City Brain</p>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">City Brain Setup</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={initializeCity}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Loading...' : 'Initialize City Brain'}
            </button>

            <button
              onClick={fetchCityState}
              disabled={loading}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Loading...' : 'Fetch City State'}
            </button>

            <button
              onClick={seedDatabase}
              disabled={loading}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Loading...' : '🌱 Seed Sample Data'}
            </button>

            <button
              onClick={clearDatabase}
              disabled={loading}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Loading...' : '🗑️ Clear All Data'}
            </button>
          </div>

          {message && (
            <div className={`p-4 rounded-lg ${message.startsWith('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
        </div>

        {cityData && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">City Brain Data</h2>

            {cityData.city && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Current State</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Mood</p>
                    <p className="text-2xl font-bold">{cityData.city.mood}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Last Updated</p>
                    <p className="text-sm">{new Date(cityData.city.last_updated).toLocaleString()}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Health Stats</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {Object.entries(cityData.city.health_stats as Record<string, number>).map(([key, value]) => (
                      <div key={key} className="p-3 bg-blue-50 rounded-lg text-center">
                        <p className="text-xs text-gray-600 capitalize">{key}</p>
                        <p className="text-xl font-bold text-blue-600">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {cityData.recentMemories && cityData.recentMemories.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Recent Memories</h3>
                <div className="space-y-2">
                  {cityData.recentMemories.map((memory: any) => (
                    <div key={memory.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{memory.event_type}</p>
                          <p className="text-sm text-gray-600">{memory.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-sm ${memory.impact_score >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {memory.impact_score > 0 ? '+' : ''}{memory.impact_score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <details className="mt-6">
              <summary className="cursor-pointer font-semibold text-gray-600 hover:text-gray-900">
                View Raw JSON
              </summary>
              <pre className="mt-4 p-4 bg-gray-900 text-green-400 rounded-lg overflow-auto text-xs">
                {JSON.stringify(cityData, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </div>
    </div>
  )
}
