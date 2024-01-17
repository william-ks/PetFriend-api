import { Request, Response } from "express";
import { GetPetsFilteredService } from "../../services/pet/GetPetsFilteredService";

export class GetPetsFilteredController {
  async handle(request: Request, response: Response) {
    const { specie } = request.params;

    const getPetsFilteredService = new GetPetsFilteredService();
    const pets = await getPetsFilteredService.execute(specie);

    response.json(pets);
  }
}
