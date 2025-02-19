import { getUser } from "../controllers/users/get-user.controller.js";
import { createUser } from "../controllers/users/create-user.controller.js";
import express from "express";
import { login } from "../controllers/users/login.controller.js";
import { deleteUser } from "../controllers/users/delete-user.controller.js";
export const useRouter = express.Router();

useRouter.get("/", getUser);
useRouter.post("/", createUser);
useRouter.post("/login", login);
useRouter.delete("/", deleteUser);
