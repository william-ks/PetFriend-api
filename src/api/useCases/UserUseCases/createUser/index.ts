import { HandlePass } from "../../../providers/implementations/HandlePass";
import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { CreateUserController } from "./createUser.controller";
import { CreateUserService } from "./createUser.service";

const userRepository = new UserRepository();
const handlePass = new HandlePass();
const createUserService = new CreateUserService(userRepository, handlePass);
const createUserControler = new CreateUserController(createUserService);

export { createUserService, createUserControler };
