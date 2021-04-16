const router = require('express').Router();
const Task = require('./model');
const mw = require('../middleware/middleware');

//get tasks
router.get('/', async (req, res, next) =>{
    try{
        const taskRow = await Task.find()
        res.status(200).json(taskRow)
    }catch(err){
        next(err)
    }
})
//get task by id
router.get('/:id', async (req, res, next) =>{
    try{
        const taskById = await Task.findById(req.params.id)
        res.status(200).json(taskById)
    }catch(err){
        next(err)
    }
})
//post new task, and return the task object
router.post('/', mw.validateTask, async (req, res, next) =>{
    try{
        const newTaskId = await Task.insert(req.body)
        const newTask = await Task.findById(newTaskId)
        res.status(201).json(newTask[0])
    }catch(err){
        next(err)
    }
})


module.exports = router;
