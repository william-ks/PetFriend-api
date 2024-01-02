import prismaClient from "../../prisma";

interface Props {
  pet_id: string;
  user_id: string;
}

export class DeletePetService {
  async execute({ pet_id, user_id }: Props) {
    if (user_id === "" || pet_id === "") {
      throw new Error("Erro");
    }

    try {
      await prismaClient.pet.delete({
        where: {
          id: pet_id,
        },
      });
      return { message: "Deletado com sucesso!" };
    } catch (error) {
      throw new Error(error);
    }
  }
}
