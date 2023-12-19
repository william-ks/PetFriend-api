import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserService } from "../../services/user/CreateUserService";

type RequestBody = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = request.body as RequestBody;
    const userService = new CreateUserService();

    const user = await userService.execute({ name, email, password });

    reply.send(user);
  }
}
