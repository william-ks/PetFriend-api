import { HandlePass } from "../../../providers/implementations/HandlePass";
import { HandleToken } from "../../../providers/implementations/HandleToken";
import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { AuthUserController } from "./authUser.controller";
import { AuthUserService } from "./authUser.service";

const userRepository = new UserRepository();
const handlePass = new HandlePass();
const handleToken = new HandleToken();
const authUserService = new AuthUserService(
  userRepository,
  handlePass,
  handleToken
);
const authUserControler = new AuthUserController(authUserService);

export { authUserService, authUserControler };
