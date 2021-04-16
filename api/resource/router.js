const router = require('express').Router();
const Resource = require('./model');
const mw = require('../middleware/middleware');

router.get('/', (req, res, next) =>{
    try{
        const resourceRow = await Resource.find()
        res.status(200).json(resourceRow)
    }catch(err){
        next(err)
    }
})

router.post()


module.exports = router;