import React from "react"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const times = [
  "8:00am", "8:30am", "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm", "3:00pm", "3:30pm",
  "4:00pm", "4:30pm", "5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm"
]

// Mock schedule: green = booked, gray = unavailable, light = open
const mockSchedule: Record<string, Record<string, "booked" | "unavailable" | "open">> = {
  Monday: {
    "2:00pm": "booked",
    "2:30pm": "booked",
  },
  Wednesday: {
    "3:00pm": "booked",
    "3:30pm": "booked",
    "4:00pm": "booked",
  },
  Friday: {},
  Saturday: {},
  Sunday: {},
  Tuesday: {},
  Thursday: {},
}

export default function WeeklyCalendarGrid() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-xs sm:text-sm">
        <thead>
          <tr>
            <th className="w-16 sm:w-20 bg-slate-100 border border-slate-200"></th>
            {days.map((day) => (
              <th key={day} className="font-semibold bg-slate-100 border border-slate-200 px-1 sm:px-2 py-1 text-center whitespace-nowrap">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="text-slate-500 bg-slate-50 border border-slate-200 px-1 sm:px-2 py-1 text-right w-16 sm:w-20 whitespace-nowrap">
                {time}
              </td>
              {days.map((day) => {
                const status = mockSchedule[day]?.[time] || (day === "Saturday" || day === "Sunday" ? "unavailable" : "open")
                let cellClass = ""
                if (status === "booked") cellClass = "bg-green-200"
                else if (status === "unavailable") cellClass = "bg-slate-300"
                else cellClass = "bg-slate-100"
                return (
                  <td
                    key={day + time}
                    className={`border border-slate-200 h-6 sm:h-8 ${cellClass} cursor-pointer transition-colors`}
                  >
                    {status === "booked" ? <span className="block w-full h-full text-[10px] sm:text-xs text-green-900 text-center">Booked</span> : null}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
