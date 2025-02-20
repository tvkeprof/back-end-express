import { Users } from "../../models/users.models.js";

export const testDelete = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteUser = await Users.deleteMany({
      __v: 0,
    });
    res.send(deleteUser).status(200);
  } catch (error) {
    console.log("error", error);
    res.send().status(400);
  }
};
