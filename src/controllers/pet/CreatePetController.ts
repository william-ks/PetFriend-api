import { Request, Response } from "express";
import { CreatePetService } from "../../services/pet/CreatePetService";

export class CreatePetController {
  async handle(request: Request, response: Response) {
    const { name, specie, weight, age, description, whatsapp } = request.body;
    const { originalname, filename: picture } = request.file;
    const user_id = request.user_id;

    const createPetService = new CreatePetService();
    if (!request.file) {
      throw new Error("Erro de upload");
    } else {
      const pet = await createPetService.execute({
        user_id,
        picture,
        name,
        specie,
        weight: Number(weight),
        age: Number(age),
        description,
        whatsapp,
      });
      return response.json(pet);
    }
  }
}
