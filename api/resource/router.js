const router = require('express').Router();
const Resource = require('./model');
const mw = require('../middleware/middleware');

router.get('/', async (req, res, next) =>{
    try{
        const resourceRow = await Resource.find()
        res.status(200).json(resourceRow)
    }catch(err){
        next(err)
    }
})

router.post('/', mw.validateResource, async (req, res, next) =>{
    try{
        const newResource = await Resource.insert(req.body)
        res.status(201).json(newResource)
    }catch(err){
        next(err)
    }
})


module.exports = router;