const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.send('User List')
  })
  

  router.route("/:id").get((req,res)=>{
    res.send('User New  Form')
}).put((req,res)=>{
    res.send('User New  Form')
}).delete((req,res)=>{
    res.send('User New  Form')
})

  router.post('/',(req,res)=>{
    res.send('Create User')
})

router.get('/new',(req,res)=>{
      res.send('User New  Form')
  })
router.get('/:id',(req,res)=>{
    req.params.id
    res.send(`User get with ID ${req.params.id}`)
})
router.put('/',(req,res)=>{
    res.send('Create User')
})

router.delete('/',(req,res)=>{
    res.send('Create User')
})


module.exports= router