export interface Stadium {
  name: string;
  capacity: string;
  county: string;
  province: string;
  stadiumURL: string;
  lng: number;
  lat: number;
  _id :string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}
