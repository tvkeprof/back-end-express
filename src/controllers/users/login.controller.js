import fs from "fs";
import bcrypt from "bcrypt"

export const login = async (req, res) => {
  const { email, password } = req.body;

  const rawUseData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUseData);

  const filteredUser = users.filter((item)=> item.email === email) 

  if (filteredUser.length > 0){
    res.json("User not found")
  }


  const match = await bcrypt.compare(password, filteredUser.password);

  if(match){
    res.json("success")
  }

  res.json("invalid password")
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // db data avjaagaa
  const rawUseData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUseData);

  // user oljoogoo
  const filteredUser = users.filter((item)=> item.email === email) 

  // hereglegch oldson uu shalgah
  if (filteredUser.length > 0){
    res.json("User not found")
  }

  //  hoyr password tulgaj  bgaa
  const match = await bcrypt.compare(password, filteredUser.password);

  // response 
  if(match){
    res.json("success")
  }

  res.json("invalid password")
}