import { Request, Response } from "express";
import { GetPetsService } from "../../services/pet/GetPetsService";

export class GetPetsController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const getPetsService = new GetPetsService();

    const getPets = await getPetsService.execute(user_id);

    return response.json(getPets);
  }
}
