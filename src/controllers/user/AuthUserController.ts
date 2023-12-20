import { FastifyRequest, FastifyReply } from "fastify";
import { AuthUserService } from "../../services/user/AuthUserService";

type RequestBody = {
  email: string;
  password: string;
};

export class AuthUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as RequestBody;

    const authUserService = new AuthUserService();

    const session = await authUserService.execute({ email, password });

    return reply.send(session);
  }
}
