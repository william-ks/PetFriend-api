import { IHandlePass } from "../../../providers/IHandlePass";
import { IHandleToken } from "../../../providers/IHandleToken";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IAuthUserDTO } from "./authUser.DTO";

export class AuthUserService {
  constructor(
    private userRepository: IUserRepository,
    private handlePass: IHandlePass,
    private handleToken: IHandleToken
  ) {}

  async execute(props: IAuthUserDTO) {
    const { email, password } = props;

    const user = await this.userRepository.findBy({
      key: "email",
      value: email,
    });

    if (!user) {
      throw {
        message: "Usuário não encontrado.",
        code: 404,
      };
    }

    const isInvalidPass = await this.handlePass.isInvalid(
      password,
      user.password
    );

    if (isInvalidPass) {
      throw {
        message: "Usuário e/ou senha estão incorretos.",
        code: 400,
      };
    }

    const token = this.handleToken.generate(user.id);

    const userReturn = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return userReturn;
  }
}
