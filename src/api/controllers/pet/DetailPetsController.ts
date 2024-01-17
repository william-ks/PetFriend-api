import { Request, Response } from "express";
import { DetailPetsService } from "../../services/pet/DetailPetsService";

export class DetailPetsController {
  async handle(request: Request, response: Response) {
    const detailPetsService = new DetailPetsService();

    const detailPets = await detailPetsService.execute();

    return response.json(detailPets);
  }
}
