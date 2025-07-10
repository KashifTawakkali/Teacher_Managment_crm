import { Bell, Search, User, Settings } from "lucide-react"

export function Header() {
  return (
    <header className="bg-red-500 text-white px-6 py-3 flex items-center justify-between w-full">
      {/* Left: App Branding/Title */}
      <div className="flex items-center space-x-4 min-w-[200px]">
        <span className="text-xl font-bold tracking-wide">MyTeacherCRM</span>
      </div>
      {/* Center: Breadcrumbs/Location Selector */}
      <div className="flex-1 flex justify-center">
        <nav className="flex items-center space-x-2 text-sm">
          <span className="opacity-80">Teachers</span>
          <span className="mx-1">/</span>
          <span className="font-semibold">Alynia Allan</span>
        </nav>
      </div>
      {/* Right: Profile/Settings */}
      <div className="flex items-center space-x-4 min-w-[150px] justify-end">
        <Search className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <Settings className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <div className="flex items-center space-x-2 cursor-pointer hover:text-red-200">
          <User className="w-5 h-5" />
          <span className="text-sm">Admin</span>
        </div>
      </div>
    </header>
  )
}
