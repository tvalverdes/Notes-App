export interface User {
  id: number
  name: string
  lastName: String
  email: String
  password: String
  creationDate: Date
  updatedAt: Date
}

export interface UserLoginData {
  id: number;
  name: string;
  lastName: string;
  email: string;
}
