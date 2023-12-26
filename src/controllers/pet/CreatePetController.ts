import { Request, Response } from "express";
import { CreatePetService } from "../../services/pet/CreatePetService";

type RequestBody = {
  picture: string;
  name: string;
  specie: string;
  weight: number;
  age: number;
  description: string;
  whatsapp: string;
};

export class CreatePetController {
  async handle(request: Request, response: Response) {
    // @ts-ignore
    const user_id = request.user_id;
    const { picture, name, specie, weight, age, description, whatsapp } =
      request.body as RequestBody;

    const createPetService = new CreatePetService();

    const pet = await createPetService.execute({
      user_id,
      picture,
      name,
      specie,
      weight,
      age,
      description,
      whatsapp,
    });

    return response.json(pet);
  }
}
