import {Doctor} from "./doctor";

export interface Slot {
  id: number;
  doctorId: number;
  date: string; // Format: 'YYYY-MM-DD'
  startTime: string; // Format: 'HH:mm'
  endTime: string;
  isReserved:boolean;
}
