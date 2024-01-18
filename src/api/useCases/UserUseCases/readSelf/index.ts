import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { ReadSelfController } from "./readSelf.controller";
import { ReadSelfService } from "./readSelf.service";

const userRepository = new UserRepository();
const readSelfService = new ReadSelfService(userRepository);
const readSelfController = new ReadSelfController(readSelfService);

export { readSelfService, readSelfController };
