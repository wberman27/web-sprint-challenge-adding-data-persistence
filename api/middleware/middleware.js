const validateResource = (req, res, next) =>{
    try{
        if(!req.body.resource_description){
            res.status(400).json({message: "resource_name is required."})
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}

const validateProject = (req, res, next) =>{
    try{
        if(!req.body.project_name){
            console.log(req.body)
            res.status(400).json({message: "project_name is required."})
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}

const validateTask = (req, res, next) =>{
    try{
        if(!req.body.task_description || !req.project_id){
            res.status(400).json({message: "task_description & project_id are required."})
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}

module.exports = {
    validateResource,
    validateProject,
    validateTask
}