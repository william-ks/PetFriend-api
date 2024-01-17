import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthUserRequest {
  email: string;
  password: string;
}

export class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Email/senha incorreto(a)");
    }

    const passwordMatch = await compare(password, user?.password);

    if (!passwordMatch) {
      throw new Error("Email/password incorrect");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      password: user?.password,
      token: token,
    };
  }
}
