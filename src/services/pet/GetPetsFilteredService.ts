import prismaClient from "../../prisma";

export class GetPetsFilteredService {
  async execute(specie: string) {
    if (specie) {
      const pets = await prismaClient.pet.findMany({
        where: {
          specie: {
            contains: specie,
          },
        },
      });

      return pets;
    }
  }
}
