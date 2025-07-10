export interface Qualification {
  name: string
  rate: number
}

export interface ScheduleSlot {
  day: string
  time: string
  available: boolean
}

export interface Teacher {
  name: string
  role: string
  birthDate: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    country: string
  }
  privateQualifications: Qualification[]
  groupQualifications: Qualification[]
  schedule: ScheduleSlot[]
}

export interface NavigationItem {
  name: string
  icon?: string
  active?: boolean
  hasSubmenu?: boolean
  submenuItems?: string[]
}
