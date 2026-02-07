import { prisma } from '@/lib/prisma'
import { VoucherForm } from './voucher-form'
import { VoucherList } from './voucher-list'

export default async function ShopManager() {
  const vouchers = await prisma.voucher.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Shop Manager</h1>
        <p className="text-gray-400 mt-1">Create and manage vouchers for the rewards shop</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VoucherForm />
        <VoucherList vouchers={vouchers} />
      </div>
    </div>
  )
}
