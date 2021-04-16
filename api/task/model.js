const db = require('../../data/dbConfig');

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
    }
    return data
}

async function insert(req_body) {
    return db("tasks").insert(req_body)
}


module.exports = {
    find,
    insert
}
