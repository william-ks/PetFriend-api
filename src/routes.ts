import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailPetController } from "./controllers/pet/DetailPetController";
import { DetailUserController } from "./controllers/user/DetailUserController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    }
  );
  //User routes
  fastify.get(
    "/me",
    { preHandler: isAuthenticated },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DetailUserController().handle(request, reply);
    }
  );
  fastify.post(
    "/register",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUserController().handle(request, reply);
    }
  );
  fastify.post(
    "/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new AuthUserController().handle(request, reply);
    }
  );
  fastify.get(
    "/pet/detail",
    { preHandler: isAuthenticated },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DetailPetController().handle(request, reply);
    }
  );
}
