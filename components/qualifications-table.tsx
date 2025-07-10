import { Edit3, Plus } from "lucide-react"
import type { Qualification } from "@/types"

interface QualificationsTableProps {
  title: string
  qualifications: Qualification[]
}

export function QualificationsTable({ title, qualifications }: QualificationsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center space-x-2">
          <Edit3 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          <Plus className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {qualifications.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-sm font-medium text-gray-600">Name</th>
                <th className="text-right py-2 text-sm font-medium text-gray-600">Rate ($/hr)</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((qual, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-2 text-gray-800">{qual.name}</td>
                  <td className="py-2 text-right text-gray-800">${qual.rate.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No qualifications added yet.</p>
      )}
    </div>
  )
}
