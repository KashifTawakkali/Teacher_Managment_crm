import { Edit3, User } from "lucide-react"
import type { Teacher } from "@/types"

interface TeacherDetailsProps {
  teacher: Teacher
}

export function TeacherDetails({ teacher }: TeacherDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Details</h2>
        <Edit3 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      <div className="flex items-start space-x-6">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-gray-400" />
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6">
          <div>
            <div className="mb-3">
              <label className="text-sm text-gray-500">Name</label>
              <p className="text-gray-800 font-medium">{teacher.name}</p>
            </div>
            <div className="mb-3">
              <label className="text-sm text-gray-500">Role</label>
              <p className="text-gray-800">{teacher.role}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Birth Date</label>
              <p className="text-gray-800">{teacher.birthDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
