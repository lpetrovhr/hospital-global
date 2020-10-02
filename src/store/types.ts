export interface Patients {
  _id: string;
  name: string;
  type: string;
  hospital_id: string;
  joined: string;
  last_visited_date: string;
  is_completed: boolean;
}

export interface User {
  token: string | null;
  userName: string | null;
  patients: Patients[] | null;
  count: number;
}

export enum UserActionTypes {
  FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
  FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
}
