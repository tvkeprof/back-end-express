import express from "express";
import { useRouter } from "./routers/user.routes.js";
import { authenticationRouter } from "./routers/authentication.routes.js";
import mongoose from "mongoose";
import { Users } from "./models/users.models.js";
import { testRouter } from "./routers/test-router.js";
import cors from "cors";
const url =
  "mongodb+srv://wefousoul:Do4hunnid@cluster0.v98ca.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("successfully");
  } catch (error) {
    console.log("error", error);
  }
};
connectDb();

const app = express();
const port = 5555;
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

app.use("/test", testRouter);

app.use("/users", useRouter);
app.use("/", authenticationRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//mongodb+srv://wefousoul:<db_password>@cluster0.v98ca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
