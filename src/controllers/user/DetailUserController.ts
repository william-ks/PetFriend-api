import { FastifyReply, FastifyRequest } from "fastify";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // @ts-ignore
    const user_id = request.user_id;

    const userDetailService = new DetailUserService();

    const detailUser = await userDetailService.execute(user_id);

    return reply.send(detailUser);
  }
}
