import { Request, Response } from "express";
import { DetailPetService } from "../../services/pet/DetailPetService";

export class DetailPetController {
  async handle(request: Request, response: Response) {
    const { pet_id } = request.params;
    const user_id = request.user_id;

    console.log(pet_id);

    const detailPetService = new DetailPetService();

    const detailPet = await detailPetService.execute({ pet_id, user_id });

    return response.json(detailPet);
  }
}
