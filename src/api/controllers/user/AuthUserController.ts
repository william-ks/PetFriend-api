import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

type RequestBody = {
  email: string;
  password: string;
};

export class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body as RequestBody;

    const authUserService = new AuthUserService();

    const session = await authUserService.execute({ email, password });

    return response.json(session);
  }
}
