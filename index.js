
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('zainabantri')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Learning backend</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>zainab is learning backend from Chaiaur Code.</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})