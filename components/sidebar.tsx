import { ChevronRight } from "lucide-react"

const navigationItems = [
  { name: "Dashboard", icon: "home", active: false },
  { name: "Teachers", icon: "users", active: true, hasSubmenu: true },
  { name: "Students", icon: "graduation-cap", active: false },
  { name: "Courses", icon: "book", active: false },
  { name: "Schedule", icon: "calendar", active: false },
  { name: "Reports", icon: "file-text", active: false },
  { name: "Settings", icon: "settings", active: false },
  { name: "Help", icon: "help-circle", active: false },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-slate-700 text-white h-screen flex flex-col">
      <div className="p-4 border-b border-slate-600">
        <h2 className="text-lg font-semibold">Richmond Hill</h2>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <div
                className={`flex items-center justify-between px-3 py-2 rounded text-sm cursor-pointer transition-colors ${
                  item.active ? "bg-slate-600 text-white" : "text-slate-300 hover:bg-slate-600 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-slate-500 rounded-sm"></div>
                  <span>{item.name}</span>
                </div>
                {item.hasSubmenu && <ChevronRight className="w-4 h-4" />}
              </div>

              {item.active && item.hasSubmenu && (
                <ul className="ml-6 mt-1 space-y-1">
                  <li className="px-3 py-1 text-sm text-slate-300 hover:text-white cursor-pointer">All Teachers</li>
                  <li className="px-3 py-1 text-sm text-slate-300 hover:text-white cursor-pointer">Add Teacher</li>
                  <li className="px-3 py-1 text-sm text-slate-300 hover:text-white cursor-pointer">Teacher Reports</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
