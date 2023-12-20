import { FastifyReply, FastifyRequest } from "fastify";
import { DetailPetService } from "../../services/pet/DetailPetService";

export class DetailPetController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // @ts-ignore
    const user_id = request.user_id;
    console.log(user_id);

    const detailPetService = new DetailPetService();

    const detailPet = await detailPetService.execute();

    return reply.send(detailPet);
  }
}
