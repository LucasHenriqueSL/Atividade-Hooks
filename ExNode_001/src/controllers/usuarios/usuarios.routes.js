const router = require('express').Router();
const usuarioController = require('./usuarios.controller');
const auth = require('../../helpers/middleware/auth.middleware');

const BASE_PATH = '/auth';

module.exports = router
    .get(`${BASE_PATH}/me`, auth, usuarioController.souEu)
    .post(`${BASE_PATH}/login`, usuarioController.logar)
    .post(`${BASE_PATH}/criar-usuario`, usuarioController.criar)