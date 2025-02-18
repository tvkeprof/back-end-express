

export const login = (req, res) => {
  const {firstname, lastname, password} =  req.body
  user.push({firstname, lastname, password})
  res.json({msg:"success"})

}