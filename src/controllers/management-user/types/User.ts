export type CreateUserRequest = {
  firstName: string;
  lastName: string;
  middleInitial: string;
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  state: string | null;
  zipCode: string | null;
};

export type UserIdentifiersParams = {
  id: string;
};

export type UserResult = {
  id: string;
};
