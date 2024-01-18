import { IHandlePass } from "../../../providers/IHandlePass";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./createUser.DTO";

export class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private handlePass: IHandlePass
  ) {}

  async execute(props: ICreateUserDTO) {
    const { name, email, password } = props;

    if (!name || !email || !password) {
      throw {
        message: "Preencha todos os campos",
        code: 400,
      };
    }

    const alreadyExists = await this.userRepository.findBy({
      key: "email",
      value: email,
    });

    if (alreadyExists) {
      throw {
        message: "Usuário/Email já existente",
        code: 400,
      };
    }

    const passwordHash = await this.handlePass.encrypt(password);

    await this.userRepository.save({ name, email, password: passwordHash });

    const { password: _, ...user } = await this.userRepository.findBy({
      key: "email",
      value: email,
    });

    return user;
  }
}
