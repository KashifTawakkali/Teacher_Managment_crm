import React from "react"

function DetailsCard() {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 border w-full">
      <div className="font-semibold mb-2">Details</div>
      <div className="text-sm">
        <div><span className="font-medium">Name:</span> Mohammadkashif Patel</div>
        <div><span className="font-medium">Role:</span> Teacher</div>
        <div><span className="font-medium">Birth Date:</span> 1990-01-01</div>
      </div>
    </div>
  )
}

function QualificationsTable({ title, data }: { title: string; data: { name: string; rate: string }[] }) {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 border w-full">
      <div className="font-semibold mb-2">{title}</div>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left font-medium">Name</th>
            <th className="text-left font-medium">Rate ($/hr)</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan={2} className="text-slate-400 py-2">No data</td></tr>
          ) : (
            data.map((row, i) => (
              <tr key={i}>
                <td className="py-1">{row.name}</td>
                <td className="py-1">{row.rate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

function EmailCard() {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 border w-full">
      <div className="font-semibold mb-2">Email</div>
      <div className="text-sm">patelkashif08@gmail.com</div>
    </div>
  )
}

function PhoneCard() {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 border w-full">
      <div className="font-semibold mb-2">Phone</div>
      <div className="text-sm">8668234170</div>
    </div>
  )
}

function AddressCard() {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 border w-full">
      <div className="font-semibold mb-2">Addresses</div>
      <div className="text-sm">R Ephuria B-12 Kondhwa Pune -411048</div>
    </div>
  )
}

export default function TeacherDetailsSection() {
  const privateQualifications = [
    { name: "Vocal Contemporary", rate: "$28.00" },
    { name: "Vocal Core", rate: "$28.00" },
    { name: "Vocal Plus", rate: "$28.00" },
    { name: "Instrument", rate: "$28.00" },
  ]
  const groupQualifications: { name: string; rate: string }[] = []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      {/* Left column */}
      <div className="flex flex-col w-full">
        <DetailsCard />
        <QualificationsTable title="Private Qualifications" data={privateQualifications} />
        <QualificationsTable title="Group Qualifications" data={groupQualifications} />
      </div>
      {/* Right column */}
      <div className="flex flex-col w-full">
        <EmailCard />
        <PhoneCard />
        <AddressCard />
      </div>
    </div>
  )
}
