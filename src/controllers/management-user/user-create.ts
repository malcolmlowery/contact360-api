import { ExpressHandler } from "@http";
import { CreateUserUsecase } from "@usecases/management-user";
import { CreateUserRequest, UserResult } from "./types/User";

export class CreateUserController {
  constructor(private createUserUsecase: CreateUserUsecase) {}

  public createUser: ExpressHandler<
    never,
    never,
    CreateUserRequest,
    UserResult
  > = async (req, res): Promise<void> => {
    try {
      const userData = req.body;

      const newUser = await this.createUserUsecase.execute(userData);

      res.status(201).json({
        data: {
          id: newUser.id,
        },
      });
    } catch (error) {
      console.error("Error creating user:", error);

      res
        .status(500)
        .json({ error: { status: 500, message: "Failed to create user" } });

      throw error;
    }
  };
}
