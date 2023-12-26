import express, { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailPetsController } from "./controllers/pet/DetailPetsController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreatePetController } from "./controllers/pet/CreatePetController";

export const router = Router();

router.get("/", async (request: Request, response: Response) => {
  return response.json({ ok: true });
});

//User routes
router.post("/register", new CreateUserController().handle);
router.post("/login", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

//Pet routes
router.get("/pets", new DetailPetsController().handle);
router.post("/pet/new", isAuthenticated, new CreatePetController().handle);
