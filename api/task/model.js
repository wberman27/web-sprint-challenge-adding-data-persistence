const db = require('../../data/dbConfig');
const Project = require('../project/model')

async function find() {
    let data = await db("tasks")
    //data iteration
    for(let i = 0; i < data.length; i++){
        //if no data then return empty array
        if(!data){
            data = []
            return data
        }else{
            //if task completed is 0, set to false, else true
            if(data[i].task_completed === 0){
                data[i] = {...data[i], task_completed: false}
               
            }else{
                data[i] = {...data[i], task_completed: true}
            }
        }
        try{
            //get the project, by id, and give tasks return object the project name and description
            let projById = await Project.findById(data[i].project_id)
            data[i] = {
                task_id: data[i].task_id,
                task_description: data[i].task_description,
                task_notes: data[i].task_notes,
                task_completed: data[i].task_completed,
                project_name: projById[0].project_name,
                project_description: projById[0].project_description
            }
        }catch(e){
            console.log(e.message, e)
        }
    }
    return data
}

//get task by id AND change project completed from binary 1, 0 to true, false
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
