export const signUpMiddleWare = (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(400).json({ error: "Email and password are required." });
  } else {
    res.send("success");
  }

  next();
};
