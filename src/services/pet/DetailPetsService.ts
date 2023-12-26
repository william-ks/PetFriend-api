import prismaClient from "../../prisma";

export class DetailPetsService {
  async execute() {
    const pets = await prismaClient.pet.findMany();

    return pets;
  }
}
