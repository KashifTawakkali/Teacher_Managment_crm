import { Edit3 } from "lucide-react"
import type { Teacher } from "@/types"

interface ContactInfoProps {
  teacher: Teacher
}

export function ContactInfo({ teacher }: ContactInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <Edit3 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Work</label>
            <p className="text-gray-800">{teacher.email}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <Edit3 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Home</label>
            <p className="text-gray-800">{teacher.phone}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Addresses</h3>
            <Edit3 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Home</label>
            <p className="text-gray-800">{teacher.address.street}</p>
            <p className="text-gray-800">{teacher.address.city}</p>
            <p className="text-gray-800">{teacher.address.country}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
