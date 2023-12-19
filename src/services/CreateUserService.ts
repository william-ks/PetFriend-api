import prismaClient from "../prisma";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: CreateUserProps) {
    if (!name || !email || !password) {
      throw new Error("Preencha todos os campos");
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
        status: true,
      },
    });

    return user;
  }
}
