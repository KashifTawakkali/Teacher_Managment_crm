const timeSlots = [
  "7:30am",
  "8am",
  "8:30am",
  "9am",
  "9:30am",
  "10am",
  "10:30am",
  "11am",
  "11:30am",
  "12pm",
  "12:30pm",
  "1pm",
  "1:30pm",
  "2pm",
  "2:30pm",
  "3pm",
  "3:30pm",
  "4pm",
  "4:30pm",
  "5pm",
  "5:30pm",
  "6pm",
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// Mock availability data - green slots represent available times
const availabilityData = {
  Monday: ["4pm", "4:30pm"],
  Tuesday: [],
  Wednesday: ["3pm", "3:30pm", "4pm"],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
}

export function CalendarGrid() {
  const getSlotStatus = (day: string, time: string) => {
    if (availabilityData[day as keyof typeof availabilityData]?.includes(time)) {
      return "available" // Green
    }
    return "unavailable" // Gray
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-8 gap-px bg-gray-200 mb-px">
          <div className="bg-white p-3 text-sm font-medium text-gray-600">All day</div>
          {days.map((day) => (
            <div key={day} className="bg-white p-3 text-sm font-medium text-gray-800 text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Time slots */}
        {timeSlots.map((time) => (
          <div key={time} className="grid grid-cols-8 gap-px bg-gray-200 mb-px">
            <div className="bg-white p-3 text-sm text-gray-600 border-r">{time}</div>
            {days.map((day) => {
              const status = getSlotStatus(day, time)
              return (
                <div
                  key={`${day}-${time}`}
                  className={`p-3 h-12 cursor-pointer transition-colors ${
                    status === "available" ? "bg-green-300 hover:bg-green-400" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
