const db = require('../../data/dbConfig');

async function find() {
    return db("projects")
}

async function insert(req_body) {
    return db("projects").insert(req_body)
}


module.exports = {
    find,
    insert
}