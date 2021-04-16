const router = require('express').Router();
const Project = require('./model');
const mw = require('../middleware/middleware');

//get projects
router.get('/', async (req, res, next) =>{
    try{
        const projectRow = await Project.find()
        res.status(200).json(projectRow)
    }catch(err){
        next(err)
    }
})
//get project by id
router.get('/:id', async (req, res, next) =>{
    try{
        const projectById = await Project.findById(req.params.id)
        res.status(200).json(projectById)
    }catch(err){
        next(err)
    }
})
//post new project, use id received in findbyId to return the whole project object
router.post('/', mw.validateProject, async (req, res, next) =>{
    try{
        const newProjectId = await Project.insert(req.body)
        const newProject = await Project.findById(newProjectId)
        res.status(201).json(newProject[0])
    }catch(err){
        next(err)
    }
})


module.exports = router;