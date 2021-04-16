const db = require('../../data/dbConfig');

async function find() {
    return db("resources")
}

async function insert() {
    
}


module.exports = {
    find,
    insert
}