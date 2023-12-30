import prismaClient from "../../prisma";

export class GetPetsService {
  async execute(user_id: string) {
    const pets = await prismaClient.pet.findMany({
      where: { ownerId: user_id },
    });
    return pets;
  }
}
