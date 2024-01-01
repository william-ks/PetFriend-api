import { Request, Response } from "express";
import { DeletePetService } from "../../services/pet/DeletePetService";

export class DeletePetController {
  async handle(request: Request, response: Response) {
    const { pet_id } = request.body;
    const user_id = request.user_id;

    const deletePetService = new DeletePetService();
    const deletePet = await deletePetService.execute({ user_id, pet_id });

    return response.json(deletePet);
  }
}
