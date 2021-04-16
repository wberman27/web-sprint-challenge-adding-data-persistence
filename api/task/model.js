const db = require('../../data/dbConfig');

async function find() {
    return db("tasks")
}

async function insert() {
    
}


module.exports = {
    find,
    insert
}
