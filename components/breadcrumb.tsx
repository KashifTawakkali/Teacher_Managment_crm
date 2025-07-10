import { ChevronRight } from "lucide-react"

export function Breadcrumb() {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <span className="cursor-pointer hover:text-gray-800">Teachers</span>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-800 font-medium">Alynia Allan</span>
    </div>
  )
}
