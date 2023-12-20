import { FastifyRequest, FastifyReply } from "fastify";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export async function isAuthenticated(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return reply.status(401).send();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    // @ts-ignore
    request.user_id = sub;

    return;
  } catch (error) {
    return reply.status(401).send();
  }
}
