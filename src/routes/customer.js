'use strict'

const customerController = require('../controllers/customer')
const { ensureAuth } = require('../services/authenticated')
const express = require('express')
const api = express.Router()

//Todas las rutas
api.post('/login', customerController.login)
api.post('/register', customerController.register)
api.get('/getInfo', ensureAuth, customerController.getYourInfo)
api.get('/getPackages', ensureAuth, customerController.getYourPackages)
api.put('/updatePassword/:id', ensureAuth, customerController.updatePassword)
api.put('/updateProfile', ensureAuth, customerController.editYourAccount)
api.delete('/deleteProfile', ensureAuth, customerController.deleteAccount)

module.exports = api