const express = require('express');
const router = express.Router();

const sumador = require('../controllers/sumador');
module.exports = app => {
    router.get('/', sumador.index);
    router.post('/sumador', sumador.sumar);
    app.use(router);
}