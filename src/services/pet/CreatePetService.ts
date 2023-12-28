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
  city: string;
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
    city,
  }: PetProcedure) {
    if (!picture || !name || !specie) {
      throw new Error("Envio inválido");
    }

    const pet = await prismaClient.pet.create({
      data: {
        picture,
        name,
        specie,
        weight,
        age,
        description,
        whatsapp,
        city,
        ownerId: user_id,
      },
    });

    return pet;
  }
}
