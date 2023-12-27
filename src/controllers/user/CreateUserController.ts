import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const userService = new CreateUserService();

    const user = await userService.execute({ name, email, password });

    response.json(user);
  }
}
