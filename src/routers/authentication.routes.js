import { Router } from "express";
import { loginUser } from "../controllers/users/login.controller";
import { validateLoginInput } from "../middlewares/authMiddleware";
import { signUpMiddleWare } from "../middlewares/signUpMiddleware";
import { createUser } from "../controllers/users/create-user.controller";

export const authenticationRouter = Router();

authenticationRouter.post("/login", validateLoginInput, loginUser)
authenticationRouter.post("/sign_up", signUpMiddleWare, createUser)


// index.js ==> app.use ==> router ==> middle? ===> controller 

// Middle 2
// 1. sign up ==> create user existed?
// 2. login ==> password match