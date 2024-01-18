import jwt from "jsonwebtoken";
import { IHandleToken } from "../IHandleToken";

export class HandleToken implements IHandleToken {
  generate(id: string): string {
    const token = jwt.sign({}, process.env.JWT_PASS, {
      subject: id,
      expiresIn: "8h",
    });

    return token;
  }

  validate(token: string): string {
    try {
      const { sub } = jwt.verify(token, process.env.JWT_PASS);
      return sub as string;
    } catch (e) {
      return;
    }
  }
}
