export interface Stadium {
  name: string;
  capacity: number;
  county: string;
  province: string;
  stadiumURL: string;
  _id :string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}
