export type DoctorSlotBody = Slot[]

export interface Slot {
  slotId: number
  doctorid: number
  date: string
  hour: string
  doctorname: string
  time: string
  fulldate: string
  key: number
}
