import { IUserRepository } from "../../../repositories/IUserRepository";
import { IReadSelfDTO } from "./readSelf.DTO";

export class ReadSelfService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id }: IReadSelfDTO) {
    const userFound = await this.userRepository.readFull(id);

    if (!userFound) {
      throw {
        code: 404,
        message: "Usuário não encontrado.",
      };
    }

    const { password: _, ...user } = userFound;

    return user;
  }
}
