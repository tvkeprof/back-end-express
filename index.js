const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const user = [{
        firstName: "its",
        lastName: "me",
        password: "pass",
}]

app.get('/user', (req, res) => {
  res.send(user)
})
app.post('/user', (req, res) => {    
    user.push(req.body)
    res.send(user)
  })
  app.put('/user', (req, res) => {
    user.push({
        firstName: "orshikh",
        lastName: "hhh"
    })
    res.send(user)
  })
  app.delete('/user', (req, res) => {
    
    user.splice(0,1)
    res.send(user)
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})