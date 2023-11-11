export interface GetAllDoctorsResponseBody {
  message: string
  result: Result[]
}

export interface Result {
  id: number
  name: string
  email: string
  password: string
  phone: string
  role: string
}
