import { Request, Response } from "express";
import { DetailPetsService } from "../../services/pet/DetailPetsService";

export class DetailPetsController {
  async handle(request: Request, response: Response) {
    const detailPetService = new DetailPetsService();

    const detailPet = await detailPetService.execute();

    return response.json(detailPet);
  }
}
