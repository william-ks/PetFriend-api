import prismaClient from "../../prisma";

interface Props {
  pet_id: string;
  user_id: string;
}

export class DetailPetService {
  async execute({ pet_id, user_id }: Props) {
    if (user_id === "" || pet_id === "") {
      throw new Error("Erro");
    }

    try {
      const response = await prismaClient.pet.findFirst({
        where: {
          id: pet_id,
        },
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
