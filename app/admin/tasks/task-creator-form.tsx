'use client'

import { createTask } from '../actions'
import { useTransition } from 'react'
import { ClipboardList } from 'lucide-react'

const categories = [
  'Water Conservation',
  'Waste Management',
  'Transport',
  'Energy',
  'Air Quality',
  'Green Spaces',
  'Community',
  'Education',
]

const difficulties = [
  { value: 'EASY', label: 'Easy', points: 10 },
  { value: 'MEDIUM', label: 'Medium', points: 25 },
  { value: 'HARD', label: 'Hard', points: 50 },
]

export function TaskCreatorForm() {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await createTask(formData)
      if (result.success) {
        e.currentTarget.reset()
        alert(result.message)
      } else {
        alert(result.message)
      }
    })
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-600 p-3 rounded-lg">
          <ClipboardList className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Create New Task</h2>
          <p className="text-sm text-gray-400">Add a sustainability mission for users</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., Use public transport for a week"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Describe the task in detail..."
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300 mb-2">
            Difficulty Level
          </label>
          <div className="grid grid-cols-3 gap-3">
            {difficulties.map((diff) => (
              <label
                key={diff.value}
                className="relative flex items-center justify-center p-4 bg-gray-800 border-2 border-gray-700 rounded-lg cursor-pointer hover:border-purple-500 transition-colors has-[:checked]:border-purple-500 has-[:checked]:bg-purple-900/20"
              >
                <input
                  type="radio"
                  name="difficulty"
                  value={diff.value}
                  required
                  className="sr-only"
                />
                <div className="text-center">
                  <p className="text-white font-medium">{diff.label}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{diff.points} pts</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="pointsReward" className="block text-sm font-medium text-gray-300 mb-2">
            Points Reward
          </label>
          <input
            type="number"
            id="pointsReward"
            name="pointsReward"
            required
            min="1"
            className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., 25"
          />
          <p className="text-xs text-gray-500 mt-1.5">
            Suggested: Easy (10-15), Medium (20-35), Hard (40-60)
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
        >
          {isPending ? 'Creating Task...' : 'Create Task'}
        </button>
      </form>
    </div>
  )
}
