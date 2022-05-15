const express = require('express')
const app = express()
app.set("view engine","ejs")


app.get('/',(req,res)=>{
    console.log('here')
  //  res.sendStatus(500).send('hello error tuba')
 //res.sendStatus(500).json({message:'hello error tuba'})
 //res.download("server.js")
    //res.send('hi')
    res.render("index",{text:"world"})
})


const userRouters= require('./routes/users')
app.use("/users",userRouters)
app.listen(3000)