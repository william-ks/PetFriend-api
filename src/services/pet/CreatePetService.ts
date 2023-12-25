import prismaClient from "../../prisma";

interface PetProcedure {
  user_id: string;
  picture: string;
  name: string;
  specie: string;
  weight: number;
  age: number;
  description: string;
  whatsapp: string;
}

export class CreatePetService {
  async execute({
    user_id,
    picture,
    name,
    specie,
    weight,
    age,
    description,
    whatsapp,
  }: PetProcedure) {
    if (!picture || !name || !specie) {
      throw new Error("Envio inválido");
    }

    const myPets = await prismaClient.pet.findFirst({
      where: { ownerId: user_id },
    });

    const pet = await prismaClient.pet.create({
      data: {
        picture,
        name,
        specie,
        weight,
        age,
        description,
        whatsapp,
        ownerId: user_id,
      },
    });

    return pet;
  }
}
