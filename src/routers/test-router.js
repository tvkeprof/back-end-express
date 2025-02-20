import express from "express";
import { getUser } from "../controllers/users/get-user.controller.js";
import { testCreateUser } from "../controllers/test/create-user.js";
import { testDelete } from "../controllers/test/delete-user.js";

export const testRouter = express.Router();

testRouter.get("/", getUser);
testRouter.post("/", testCreateUser);
testRouter.delete("/", testDelete);
