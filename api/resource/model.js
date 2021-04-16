const db = require('../../data/dbConfig');

//get resources from database
async function find() {
    return db("resources")
}
//get resources by id
async function findById(id){
    return db("resources")
    .where("resource_id", id)
}
//insert a new resource into db
async function insert(req_body) {
    return db("resources").insert(req_body)
}


module.exports = {
    find,
    findById,
    insert
}