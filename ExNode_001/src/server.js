const express = require('express');
const cors = require('cors');
const errorHandler = require('./helpers/handler.error');
const UsuarioRoutes = require('./controllers/usuarios.routes');

const server = express();

server.use(cors());
server.use(express.json());

server.use(UsuarioRoutes);

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