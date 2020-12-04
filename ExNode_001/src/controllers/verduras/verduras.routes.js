const router = require('express').Router();
const verduraController = require('./verduras.controller');
const auth = require('../../helpers/middleware/auth.middleware');

const BASE_PATH = '/verduras';

module.exports = router
    .get(`${BASE_PATH}`, auth, verduraController.pegar)