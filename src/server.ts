import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });

app.setErrorHandler((error, _, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({
      port: Number(process.env.PORT) || 3333,
      host: "0.0.0.0",
    });
  } catch (error) {
    process.exit(1);
  }
};

start();
