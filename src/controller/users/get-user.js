//
// import { user } from "./create-user.js";
import fs from "fs";

export const getUser = (req, res) => {
  const rawUseData = fs.readFileSync("src/db/users.json");
  res.send(JSON.parse(rawUseData));
};
