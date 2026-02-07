'use client'

import { deleteVoucher } from '../actions'
import { Trash2, Calendar, Coins } from 'lucide-react'
import { useTransition } from 'react'
import type { Voucher } from '@/lib/generated/prisma'

export function VoucherList({ vouchers }: { vouchers: Voucher[] }) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = async (voucherId: string) => {
    if (!confirm('Are you sure you want to delete this voucher?')) return

    startTransition(async () => {
      const result = await deleteVoucher(voucherId)
      if (result.success) {
        alert(result.message)
      } else {
        alert(result.message)
      }
    })
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Existing Vouchers</h2>

      {vouchers.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
            <Coins className="w-8 h-8 text-gray-600" />
          </div>
          <p className="text-gray-400">No vouchers created yet</p>
          <p className="text-sm text-gray-500 mt-1">Create your first voucher using the form</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold truncate">{voucher.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Coins className="w-4 h-4" />
                      <span>{voucher.cost_points} points</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Expires {new Date(voucher.expiry_date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="text-gray-500">Stock: {voucher.stock}</span>
                    <span className="text-gray-500">Code: {voucher.code}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(voucher.id)}
                  disabled={isPending}
                  className="flex-shrink-0 p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Delete voucher"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
