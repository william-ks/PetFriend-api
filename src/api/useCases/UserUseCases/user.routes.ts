import { Router } from "express";
import { createUserControler } from "./createUser";
import { authUserControler } from "./authUser";
import { isAuth } from "../../middlewares/isAuth";

const userRouter = Router();

userRouter.post("/user/register", (req, res) => {
  return createUserControler.handle(req, res);
});

userRouter.post("/user/login", (req, res) => {
  return authUserControler.handle(req, res);
});

userRouter.use(isAuth);

userRouter.get("/user/self", (req, res) => {
  return;
});

export { userRouter };
