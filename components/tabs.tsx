"use client"

import React, { useState } from "react"

const tabs = [
  "Availability",
  "Unavailabilities",
  "Students",
  "Schedule",
  "Invoiced Lessons",
  "Unscheduled Lessons",
  "Time Voucher",
  "Comments",
  "History",
]

export default function TabNavigation({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("Availability")

  return (
    <div className="mt-8">
      <div className="border-b border-slate-300 flex space-x-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab
                ? "border-red-500 text-red-600 bg-slate-100"
                : "border-transparent text-slate-500 hover:text-red-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-b shadow p-4 border-x border-b border-slate-200">
        {children}
      </div>
    </div>
  )
}
