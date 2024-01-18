import { Router } from "express";
import { userRouter } from "./useCases/UserUseCases/user.routes";

const router = Router();

router.use(userRouter);

export { router };
