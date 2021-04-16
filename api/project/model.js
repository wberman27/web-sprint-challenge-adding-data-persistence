const db = require('../../data/dbConfig');

async function find() {
    let data = await db("projects")
    for(let i = 0; i < data.length; i++){
        if(!data){
            data = []
            return data
        }else{
            if(data[i].project_completed === 0){
                data[i] = {...data[i], project_completed: false}
               
            }else{
                data[i] = {...data[i], project_completed: true}
            }
        }
    }
    return data
}

async function findById(id){
    let data = await db("projects")
    .where("project_id", id)
    for(let i = 0; i < data.length; i++){
        if(!data){
            data = []
            return data
        }else{
            if(data[i].project_completed === 0){
                data[i] = {...data[i], project_completed: false}
               
            }else{
                data[i] = {...data[i], project_completed: true}
            }
        }
    }
    return data
}

async function insert(req_body) {
    return db("projects").insert(req_body)
}


module.exports = {
    find,
    findById,
    insert
}