'use strict'

const customerController = require('../controllers/customerController')
const { ensureAuth } = require('../services/authenticated')
const express = require('express')
const api = express.Router()

//Customer Routes
api.post('/login', customerController.login)
api.post('/register', customerController.register)
api.get('/readInfo', ensureAuth, customerController.readInfo)
api.get('/readPackages', ensureAuth, customerController.readPackages)
api.put('/updatePass/:id', ensureAuth, customerController.updatePass)
api.put('/updateInfo', ensureAuth, customerController.updateInfo)
api.delete('/deleteProfile', ensureAuth, customerController.deleteAccount)

module.exports = api