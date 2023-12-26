import { Request, Response } from "express";
import { DetailPetService } from "../../services/pet/DetailPetService";

export class DetailPetController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const detailPetService = new DetailPetService();

    const detailPet = await detailPetService.execute();

    return response.json(detailPet);
  }
}
