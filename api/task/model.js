const db = require('../../data/dbConfig');
const Project = require('../project/model')

async function find() {
    let data = await db("tasks")
    for(let i = 0; i < data.length; i++){
        if(!data){
            data = []
            return data
        }else{
            if(data[i].task_completed === 0){
                data[i] = {...data[i], task_completed: false}
               
            }else{
                data[i] = {...data[i], task_completed: true}
            }
        }
        try{
            const projById = await Project.findById(data[i].project_id)
            console.log(projById)
            const tasks = {
                task_id: data[0].task_id,
                task_description: data[0].task_description,
                task_notes: data[0].task_notes,
                task_completed: data[0].task_completed,
                project_name: projById[i].project_name,
                project_description: projById[i].project_description
            }
            return tasks

        }catch(err){
            console.log(err.message)
        }
    }
    // return data
}

async function findById(id){
    let data = await db("tasks")
    .where("task_id", id)
    for(let i = 0; i < data.length; i++){
        if(!data){
            data = []
            return data
        }else{
            if(data[i].task_completed === 0){
                data[i] = {...data[i], task_completed: false}
               
            }else{
                data[i] = {...data[i], task_completed: true}
            }
        }
    }
    return data
}

async function insert(req_body) {
    return db("tasks").insert(req_body)
}


module.exports = {
    find,
    findById,
    insert
}
