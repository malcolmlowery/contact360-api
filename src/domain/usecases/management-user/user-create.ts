import { User } from "@entities/User";
import { IUserRepository } from "@domain/repositories/user/UserRepository";

export class CreateUserUsecase {
  constructor(private userRepository: IUserRepository) {}

  async execute(
    userData: Omit<User, "id" | "createdAt" | "updatedDate">
  ): Promise<User> {
    const {
      firstName,
      lastName,
      dateOfBirth,
      middleInitial,
      email,
      phoneNumber,
      state,
      zipCode,
    } = userData;

    const user: User = {
      id: "uuid",
      firstName,
      lastName,
      middleInitial,
      dateOfBirth,
      email,
      phoneNumber,
      state,
      zipCode,
      createdAt: new Date(),
      updatedDate: new Date(),
    };

    const newUser = await this.userRepository.create(user);

    return newUser;
  }
}
