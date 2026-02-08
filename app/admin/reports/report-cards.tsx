'use client'

import { useState, useTransition } from 'react'
import { generateMonthlyReport, generateAdminActivityLog } from '../actions'
import { FileText, Activity, Download } from 'lucide-react'

export function ReportCards() {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<string>('')

  const handleDownloadReport = async (reportType: 'monthly' | 'activity') => {
    setStatus(`Generating ${reportType === 'monthly' ? 'monthly report' : 'activity log'}...`)

    startTransition(async () => {
      const result = reportType === 'monthly'
        ? await generateMonthlyReport()
        : await generateAdminActivityLog()

      if (result.success && result.data) {
        const blob = new Blob([result.data], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${reportType === 'monthly' ? 'monthly-report' : 'admin-activity-log'}-${new Date().toISOString().split('T')[0]}.csv`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
        setStatus('Report downloaded successfully!')
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('Failed to generate report')
        setTimeout(() => setStatus(''), 3000)
      }
    })
  }

  return (
    <div>
      {status && (
        <div className="mb-6 p-4 bg-blue-900/50 border border-blue-700 rounded-lg">
          <p className="text-blue-200">{status}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Monthly Report</h2>
              <p className="text-sm text-gray-400">Comprehensive system overview</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Includes:</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                All user profiles with XP and scores
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Task catalog with categories
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Voucher inventory status
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleDownloadReport('monthly')}
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            {isPending ? 'Generating...' : 'Download CSV'}
          </button>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-600 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Admin Activity Log</h2>
              <p className="text-sm text-gray-400">Track administrative actions</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Includes:</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                Admin usernames and actions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                Target IDs and action details
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                Timestamps for all activities
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleDownloadReport('activity')}
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            <Download className="w-5 h-5" />
            {isPending ? 'Generating...' : 'Download CSV'}
          </button>
        </div>
      </div>

      <div className="mt-6 bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-3">Report Information</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p>
            Reports are generated in CSV format for easy analysis in spreadsheet applications.
          </p>
          <p>
            Monthly reports provide a snapshot of the current system state, while activity logs track all administrative actions.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Note: Reports are generated on-demand and not stored on the server.
          </p>
        </div>
      </div>
    </div>
  )
}
