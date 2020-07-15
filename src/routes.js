const routes = require('express').Router();

const SessioController = require('../src/app/controllers/SessionControllers');

routes.post('/sessions', SessioController.store);

module.exports = routes;