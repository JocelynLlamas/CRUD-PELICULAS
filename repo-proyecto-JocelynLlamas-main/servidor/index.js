const express = require('express');
const conectarDB = require('./config/database');
const cors = require("cors");

// SERVIDOR
const server = express();

// CONEXION DB
conectarDB();
server.use(cors());
server.use(express.json());


server.use('/api/peliculas', require('./routes/pelicula'));

server.listen(4000, ()=>{
    console.log('Ningun problema con el servidor')
})