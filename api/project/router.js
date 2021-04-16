const router = require('express').Router();
const Project = require('./model');
const mw = require('../middleware/middleware');

router.get('/', (req, res, next) =>{
    try{
        const projectRow = await Project.find()
        res.status(200).json(projectRow)
    }catch(err){
        next(err)
    }
})

router.post()


module.exports = router;