import { Router } from "express";
import { loginUser } from "../controllers/users/login.controller.js";
import { validateLoginInput } from "../middlewares/authMiddleware.js";
import { signUpMiddleWare } from "../middlewares/signUpMiddleware.js";
import { createUser } from "../controllers/users/create-user.controller.js";

export const authenticationRouter = Router();

authenticationRouter.post("/", validateLoginInput, loginUser);
authenticationRouter.post("/", signUpMiddleWare, createUser);

// index.js ==> app.use ==> router ==> middle? ===> controller

// Middle 2
// 1. sign up ==> create user existed?
// 2. login ==> password match
