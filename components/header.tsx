import { Bell, Search, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-red-500 text-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Richmond Hill</h1>
      </div>

      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <div className="flex items-center space-x-2 cursor-pointer hover:text-red-200">
          <User className="w-5 h-5" />
          <span className="text-sm">Admin</span>
        </div>
      </div>
    </header>
  )
}
