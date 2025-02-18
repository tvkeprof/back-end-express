import { getUser } from "../controller/users/get-user.js";
import { createUser } from "../controller/users/create-user.js";
import express from "express";
import { login } from "../controller/users/login.js";
export const useRouter = express.Router();

useRouter.get("/", getUser);
useRouter.post("/", createUser);
useRouter.post("/login", login);
