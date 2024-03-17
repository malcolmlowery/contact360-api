export type User = {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedDate: Date;
  middleInitial: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  state: string | null;
  zipCode: string | null;
};
