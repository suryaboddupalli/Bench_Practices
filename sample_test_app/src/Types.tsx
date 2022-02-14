export interface person {
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  gender: string;
  mobile: number;
  altMobile: number;
  email: string;
  address: string;
  pincode: number;
  collegeName: string;
  degree: string;
  branch: string;
  location: string;
  yearOfPass: number;
  percent: number;
}

export interface details {
  title: String;
  option: number[];
  answer: string;
}

export interface props {
  data: details;
  index: string;
  changeHandler(temp: number, index: number): void;
}

export interface ContextData {
  Result: number;
}
