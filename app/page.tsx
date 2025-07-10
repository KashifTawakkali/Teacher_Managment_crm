import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Breadcrumb } from "@/components/breadcrumb"
import { TeacherDetails } from "@/components/teacher-details"
import { ContactInfo } from "@/components/contact-info"
import { QualificationsTable } from "@/components/qualifications-table"
import { Tabs } from "@/components/tabs"
import { CalendarGrid } from "@/components/calendar-grid"
import type { Teacher } from "@/types"

// Mock teacher data
const mockTeacher: Teacher = {
  name: "Alynia Allan",
  role: "Teacher",
  birthDate: "March 15, 1985",
  email: "AlyniaAllan@example.com",
  phone: "(416) 555-9057",
  address: {
    street: "123 Maple Street, Apt 4B",
    city: "North York, Ontario",
    country: "Canada",
  },
  privateQualifications: [
    { name: "Vocal Contemporary", rate: 35.0 },
    { name: "Vocal Jazz", rate: 35.0 },
    { name: "Vocal Classical", rate: 40.0 },
    { name: "Vocal Pop", rate: 35.0 },
    { name: "Instrument", rate: 35.0 },
  ],
  groupQualifications: [],
  schedule: [],
}

export default function TeacherManagement() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb />

            <div className="space-y-6">
              <TeacherDetails teacher={mockTeacher} />
              <ContactInfo teacher={mockTeacher} />
              <QualificationsTable title="Private Qualifications" qualifications={mockTeacher.privateQualifications} />
              <QualificationsTable title="Group Qualifications" qualifications={mockTeacher.groupQualifications} />

              <Tabs>
                <CalendarGrid />
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
