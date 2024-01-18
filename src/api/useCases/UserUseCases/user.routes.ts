import { Router } from "express";
import { createUserControler } from "./createUser";

const userRouter = Router();

userRouter.post("/register", (req, res) => {
  return createUserControler.handle(req, res);
});

export { userRouter };
