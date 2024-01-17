import { IHandlePass } from "../IHandlePass";
import bcrypt from "bcrypt";

export class HandlePass implements IHandlePass {
  async encrypt(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);

    return hash;
  }

  async isInvalid(pass: string, hashPass: string): Promise<boolean> {
    const valid = await bcrypt.compare(pass, hashPass);

    return !valid;
  }
}
