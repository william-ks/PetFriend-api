import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

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

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Usuário/Email já existente");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        status: true,
      },
      select: {
        id: true,
        name: true,
        email: true,
        status: true,
      },
    });

    return user;
  }
}
