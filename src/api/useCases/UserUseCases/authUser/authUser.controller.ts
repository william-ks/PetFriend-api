import { Request, Response } from "express";
import { AuthUserService } from "./authUser.service";

export class AuthUserController {
  constructor(private authUserService: AuthUserService) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await this.authUserService.execute({
      email,
      password,
    });

    return res.status(200).json(user);
  }
}
