import { ReportCards } from './report-cards'

export default function ReportsCenter() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Reports Center</h1>
        <p className="text-gray-400 mt-1">Generate and download system reports</p>
      </div>

      <ReportCards />
    </div>
  )
}
