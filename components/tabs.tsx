"use client"

import type React from "react"

import { useState } from "react"

const tabs = [
  "Availability",
  "Unavailabilities",
  "Students",
  "Schedule",
  "Invoiced Lessons",
  "Uninvoiced Lessons",
  "One Voucher",
  "Comments",
  "History",
]

interface TabsProps {
  children: React.ReactNode
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState("Availability")

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="border-b">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? "border-red-500 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === "Availability" && children}
        {activeTab !== "Availability" && (
          <div className="text-center py-8 text-gray-500">{activeTab} content will be displayed here.</div>
        )}
      </div>
    </div>
  )
}
