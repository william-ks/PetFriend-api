import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

type RequestBody = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body as RequestBody;
    const userService = new CreateUserService();

    const user = await userService.execute({ name, email, password });

    response.json(user);
  }
}
