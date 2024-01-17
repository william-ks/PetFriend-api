import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const userDetailService = new DetailUserService();

    const detailUser = await userDetailService.execute(user_id);

    return response.json(detailUser);
  }
}
