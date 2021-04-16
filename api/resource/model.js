const db = require('../../data/dbConfig');

async function find() {
    return db("resources")
}

async function insert(req_body) {
    return db("resources").insert(req_body)
}


module.exports = {
    find,
    insert
}