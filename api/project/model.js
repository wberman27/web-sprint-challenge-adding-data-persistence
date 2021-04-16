const db = require('../../data/dbConfig');

async function find() {
    return db("projects")
}

async function insert() {
    
}


module.exports = {
    find,
    insert
}