"use strict";

import fs from "fs";
import bcrypt from "bcrypt";

const salt = 9;

export const createUser = (req, res) => {
  const { email, password } = req.body;

  // db handalt
  const rawUseData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUseData);

  //  password nuutsalj bgaa
  const hash = bcrypt.hashSync(password, salt);

  // db ruugee hadgalah

  users.push({
    email,
    password: hash,
  });

  // db ruugee shineer bichij bna

  fs.writeFileSync("src/db/users.json", JSON.stringify(users));

  res.send(users);
};
