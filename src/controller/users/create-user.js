import fs from "fs";

// export const user = [
//   {
//     firstname: "pretty",
//     lastname: "flvcko",
//     password: "888",
//   },
// ];
export const createUser = (req, res) => {
  const rawUseData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUseData);
  users.push(req.body);
  console.log(users);

  fs.writeFileSync("src/db/users.json", JSON.stringify(users));
  res.send(users);
};
