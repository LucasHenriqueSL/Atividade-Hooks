const express = require('express');
const cors = require('cors');
const UsuarioRoutes = require('./controllers/usuarios/usuarios.routes');
const VerdurasRoutes = require('./controllers/verduras/verduras.routes');

const server = express();

server.use(cors());
server.use(express.json());

server.use(UsuarioRoutes);
server.use(VerdurasRoutes);

server.use((req, res, next) => {
    const error = new Error("página não encontrada");
    error.status = 404;
    next(error); 
});

server.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({mensagem: error.message});
});

module.exports = server;