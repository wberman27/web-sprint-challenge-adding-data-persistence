const router = require('express').Router();
const Resource = require('./model');
const mw = require('../middleware/middleware');

//get resources
router.get('/', async (req, res, next) =>{
    try{
        const resourceRow = await Resource.find()
        res.status(200).json(resourceRow)
    }catch(err){
        next(err)
    }
})
//get resources by id
router.get('/:id', async (req, res, next) =>{
    try{
        const resourceById = await Resource.findById(req.params.id)
        res.status(200).json(resourceById)
    }catch(err){
        next(err)
    }
})
//post new resource, use findbyid to return whole resource object not just id
router.post('/', mw.validateResource, async (req, res, next) =>{
    try{
        const newResourceId = await Resource.insert(req.body)
        const newResource = await Resource.findById(newResourceId)
        res.status(201).json(newResource[0])
    }catch(err){
        next(err)
    }
})


module.exports = router;