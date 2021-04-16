const Project = require('../project/model')

const validateResource = (req, res, next) =>{
    try{
        //if name is not given to req.body then send error, else move on
        if(!req.body.resource_name){
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
        if(!req.body.task_description || !req.body.project_id){
            res.status(400).json({message: "task_description & project_id are required."})
        }else{
            //check if ID exists, by pushing all ids into an array and seeing if the array includes ID
            const projectIdArray = []
            Project.find()
            .then(projects =>{
                projects.map(p =>{
                    projectIdArray.push(p.project_id)
                    return projectIdArray;
                })
                if(projectIdArray.includes(req.body.project_id) === false){
                    res.status(400).json({message: `Project ID ${req.body.project_id} does not exist.`})
                }else{
                    next()
                }
            })
            .catch(e =>{
                console.log(e.message)
            })

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