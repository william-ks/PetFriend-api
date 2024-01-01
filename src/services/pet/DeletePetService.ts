import prismaClient from "../../prisma";

interface Props {
  pet_id: string;
  user_id: string;
}

export class DeletePetService {
  async execute({ pet_id, user_id }: Props) {
    if (user_id === "" || pet_id === "") {
      throw new Error("Erro");
    } else {
      const deletePet = await prismaClient.pet.delete({
        where: {
          id: pet_id,
        },
      });
      return { message: "Deletado com sucesso!" };
    }
  }
}
