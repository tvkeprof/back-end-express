import { Users } from "../../models/users.models.js";

export const testCreateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = Users({
      email,
      password,
    });
    await newUser.save();
    res.send(newUser).status(200);
  } catch (error) {
    console.log("error", error);
    res.send().status(400);
  }
};
