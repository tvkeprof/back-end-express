import fs from "fs";
import { Users } from "../../models/users.models.js";

export const getUser = async (req, res) => {
  try {
    const userData = await Users.find();

    res.send(userData).status(200);
  } catch (error) {
    console.log("error", error);
    res.send().status(400);
  }
};
