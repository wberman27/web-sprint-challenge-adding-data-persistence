//imports
const express = require('express');
const taskRouter = require('./task/router');
const resourceRouter = require('./resource/router');
const projectRouter = require('./project/router');

//server setup with express
const server = express();

//use json format
server.use(express.json());
//use routers
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);


//server default/homepage log
server.get('/', (_, res) =>{
    res.status(200).json({message: "API is running."})
})
//use catch error 500
server.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
});

module.exports = server;