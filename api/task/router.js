const router = require('express').Router();
const Task = require('./model');
const mw = require('../middleware/middleware');

router.get('/', async (req, res, next) =>{
    try{
        const taskRow = await Task.find()
        res.status(200).json(taskRow)
    }catch(err){
        next(err)
    }
})

router.post('/', mw.validateTask, async (req, res, next) =>{
    try{
        const newTask = await Task.insert(req.body)
        res.status(201).json(newTask)
    }catch(err){
        next(err)
    }
})


module.exports = router;
