import { Bell, Search, User, Settings, Menu } from "lucide-react"

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="bg-red-500 text-white px-4 sm:px-6 py-3 flex items-center justify-between w-full">
      {/* Left: Hamburger for mobile, App Branding/Title */}
      <div className="flex items-center space-x-4 min-w-[120px]">
        <button className="md:hidden mr-2" onClick={onMenuClick} aria-label="Open sidebar">
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-xl font-bold tracking-wide hidden md:inline">MyTeacherCRM</span>
      </div>
      {/* Center: Breadcrumbs/Location Selector */}
      <div className="flex-1 flex justify-center">
        <nav className="flex items-center space-x-2 text-sm">
          <span className="opacity-80">Teachers</span>
          <span className="mx-1">/</span>
          <span className="font-semibold">Mohammadkashif Patel</span>
        </nav>
      </div>
      {/* Right: Profile/Settings */}
      <div className="flex items-center space-x-4 min-w-[120px] justify-end">
        <Search className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <Settings className="w-5 h-5 cursor-pointer hover:text-red-200" />
        <div className="flex items-center space-x-2 cursor-pointer hover:text-red-200">
          <User className="w-5 h-5" />
          <span className="text-sm hidden sm:inline">Admin</span>
        </div>
      </div>
    </header>
  )
}
