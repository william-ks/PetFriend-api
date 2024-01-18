import { Request, Response } from "express";
import { AuthUserService } from "./readSelf.service";

export class ReadSelfController {
  constructor(private authUserService: AuthUserService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.user;

    const user = await this.authUserService.execute({ id });

    return res.status(200).json(user);
  }
}
