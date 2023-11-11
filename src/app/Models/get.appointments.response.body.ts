export interface GetAppointmentResponseBody {
  message: string;
  result: Result[];
}

export  interface Result {
  id: number;
  slotid: number;
  patientid: number;
  doctorid: number;
  status: string;
  keys: number;
  doctorname: string;
  fulldate: string;
}
