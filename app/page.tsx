import AppLayout from "../components/layout"
import TeacherDetailsSection from "../components/teacher-details"
import TabNavigation from "../components/tabs"
import WeeklyCalendarGrid from "../components/calendar-grid"

export default function Home() {
  return (
    <AppLayout>
      <TeacherDetailsSection />
      <TabNavigation>
        <WeeklyCalendarGrid />
      </TabNavigation>
    </AppLayout>
  )
}
