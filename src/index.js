import express from "express";
import { useRouter } from "./routers/user.routes.js";
import { authenticationRouter } from "./routers/authentication.routes.js";
const app = express();
const port = 3000;
app.use(express.json());

app.use("/users", useRouter);
app.use("/", authenticationRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
