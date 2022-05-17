const express = require('express')
const router = express.Router()
router.use(logger)
router.get('/',(req,res)=>{
    res.send('User List')
  })
  
  router.post('/',(req,res)=>{
    res.send('Create User')
})
router.put('/',(req,res)=>{
    res.send('Create User')
})

router.delete('/',(req,res)=>{
    res.send('Create User')
})


  router.route("/:id").get((req,res)=>{
    res.send(`User get with ID ${req.params.id}`)
    console.log(req.user)
}).put((req,res)=>{
    res.send(`User get with ID ${req.params.id}`)
}).delete((req,res)=>{
    res.send(`User get with ID ${req.params.id}`)
})

router.get('/new',(req,res)=>{
      res.send('User New  Form')
  })


// it is going to run any tine when it find the param it matches the name you find in
const users =[{name:"tuba"},{name:"shehla"}]

router.param("id",(req,res,next,id)=>{
    req.user= users[id]
    // this find that params and run the code
    // but it does not actually run anyother code
    // untill we call this function next
// bcz the param in here is actually work as a middle layer
next() // when we call this then the actually reponse will return to user
// means the above get put methods codes

console.log(id)
})
// middleware - we mostly use next when we work on middleware

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
    }
    


module.exports= router