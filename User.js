const express = require('express');

const router = express.Router();
const User = require('../models/user'); 


// router.post('/task',(req,res)=>{
//     const task = new task(req.body)

//     try{                                              // use async & await
//         const taskSave = await post.save();
//         res.json(taskSave);
//        }catch(err){
//            res.json({message:err});
    
//        }

// })

router.post('/post/user', async(req, res) => {
    const user =  new User({
         name:req.body.name,
         email: req.body.email,
         password: req.body.password});

        try{                                              // use async & await
            const userSave = await user.save();
            res.json(userSave);
           }catch(err){
               res.json({message:err});
        
           }
})

router.get('/user', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

// app.get('/user/:id', (req, res) => {
//     const _id = req.params.id

//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)

//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })
module.exports = router;
