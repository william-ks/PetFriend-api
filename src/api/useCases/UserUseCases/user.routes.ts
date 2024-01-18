import { Router } from "express";
import { createUserController } from "./createUser";
import { authUserController } from "./authUser";
import { isAuth } from "../../middlewares/isAuth";
import { readSelfController } from "./readSelf";

const userRouter = Router();

userRouter.post("/user/register", (req, res) => {
  return createUserController.handle(req, res);
});

userRouter.post("/user/login", (req, res) => {
  return authUserController.handle(req, res);
});

userRouter.use(isAuth);

userRouter.get("/user/self", (req, res) => {
  return readSelfController.handle(req, res);
});

export { userRouter };
