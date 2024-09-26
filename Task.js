const express = require('express');

const router = express.Router();
const Task = require('../models/task'); 


router.post('/task',async(req,res)=>{
        const task = new task(req.body)
    
        try{                                              // use async & await
            const taskSave = await post.save();
            res.json(taskSave);
           }catch(err){
               res.json({message:err});
           }
        
           })


    module.exports = router;