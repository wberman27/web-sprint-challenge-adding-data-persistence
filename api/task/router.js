const router = require('express').Router();
const Task = require('./model');
const mw = require('../middleware/middleware');

router.get('/', (req, res, next) =>{
    try{
        const taskRow = await Task.find()
        res.status(200).json(taskRow)
    }catch(err){
        next(err)
    }
})
router.post()


module.exports = router;
