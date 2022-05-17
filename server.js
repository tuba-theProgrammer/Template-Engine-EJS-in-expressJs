const express = require('express')
const app = express()
app.set("view engine","ejs")
//app.use(logger) 
// define middleware at the top of your file if you want it to use everywhere
// bcz middleware work as top to bottom
// if we dont want it to use everywhere use it individually on end points


app.use(express.static("public"))

// can set directly with endpoints
// remaining code will run after this logger function
// can add multiple logger files as well

app.get('/',logger,(req,res)=>{
    console.log('here')
  //  res.sendStatus(500).send('hello error tuba')
 //res.sendStatus(500).json({message:'hello error tuba'})
 //res.download("server.js")
    //res.send('hi')

    // static way - to access files 
  //  res.render("index",{text:"world"})
})


const userRouters= require('./routes/users')
app.use("/users",userRouters)


// middleware - we mostly use next when we work on middleware

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
    }
    
    
app.listen(3000)