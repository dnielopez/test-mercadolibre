'use strict'

/**
 * Definir los diferentes endpoints
 * que podrá consultar los usuarios
 * con su respectivo Middleware
 */

const MiddlewareAuth = require('../middlewareAuth');
const UsersController = require('./controller');
const express = require('express');
const api = express.Router();

api.get("/api/categories/:id", MiddlewareAuth, UsersController.getCategory);
api.get("/api/items/:id", MiddlewareAuth, UsersController.getItem);
api.get("/api/items", MiddlewareAuth, UsersController.getItems);

module.exports = api;