'use client'

import { createVoucher } from '../actions'
import { useTransition } from 'react'
import { Package } from 'lucide-react'

export function VoucherForm() {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await createVoucher(formData)
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
        <div className="bg-blue-600 p-3 rounded-lg">
          <Package className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Add New Voucher</h2>
          <p className="text-sm text-gray-400">Create a new reward for users</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., $10 Coffee Voucher"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="costPoints" className="block text-sm font-medium text-gray-300 mb-2">
              Cost (Points)
            </label>
            <input
              type="number"
              id="costPoints"
              name="costPoints"
              required
              min="0"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="100"
            />
          </div>

          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-300 mb-2">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              required
              min="0"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-2">
            Secret Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="COFFEE2024"
          />
        </div>

        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300 mb-2">
            Expiry Date
          </label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
        >
          {isPending ? 'Creating...' : 'Create Voucher'}
        </button>
      </form>
    </div>
  )
}
