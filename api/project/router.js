const router = require('express').Router();
const Project = require('./model');
const mw = require('../middleware/middleware');

router.get('/', async (req, res, next) =>{
    try{
        const projectRow = await Project.find()
        res.status(200).json(projectRow)
    }catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) =>{
    try{
        const projectById = await Project.findById(req.params.id)
        res.status(200).json(projectById)
    }catch(err){
        next(err)
    }
})

router.post('/', mw.validateProject, async (req, res, next) =>{
    try{
        const newProjectId = await Project.insert(req.body)
        const newProject = await Project.findById(newProjectId)
        res.status(201).json(newProject)
    }catch(err){
        next(err)
    }
})


module.exports = router;