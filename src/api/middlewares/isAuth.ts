import { NextFunction, Request, Response } from "express";
import { HandleToken } from "../providers/implementations/HandleToken";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.includes("Bearer")) {
    throw {
      code: 401,
      message: "Você precisa estar logado.",
    };
  }

  const token = authorization.split(" ")[1];

  let id;
  const handleToken = new HandleToken();

  try {
    id = handleToken.validate(token);
  } catch (e) {
    console.log(e);
    return res.status(500).json("erro interno");
  }

  if (!id) {
    throw {
      code: 401,
      message: "Você precisa estar logado.",
    };
  }

  req.user = id;

  next();
};
