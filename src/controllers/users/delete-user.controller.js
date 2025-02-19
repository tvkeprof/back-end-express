import fs from "fs"

export const deleteUser = (req, res) => {
      const rawUseData = fs.readFileSync("src/db/users.json");
      const users = JSON.parse(rawUseData);

      
      
    users.splice(0,1)
    res.send(users)
    //   users.push(req.body);
    //   console.log(users);
    
      fs.writeFileSync("src/db/users.json", JSON.stringify(users));
      res.send(users);
}