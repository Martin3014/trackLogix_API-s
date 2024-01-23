'use strict';

const customerController = require('../controllers/customerController');
const { ensureAuth } = require('../services/authenticated');
const express = require('express');
const api = express.Router();  // 

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Operaciones relacionadas con los clientes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre de usuario del cliente.
 *           example: usuario123
 *         password:
 *           type: string
 *           format: password
 *           description: Contraseña del cliente.
 *           example: contraseña123
 *
 *     RegisterRequest:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre de usuario del cliente.
 *           example: usuarioNuevo
 *         password:
 *           type: string
 *           format: password
 *           description: Contraseña del cliente.
 *           example: nuevaContraseña
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del cliente.
 *           example: usuarioNuevo@example.com
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión de un usuario.
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *       401:
 *         description: Credenciales no válidas.
 */

api.post('/login', customerController.login);

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registrar un nuevo usuario.
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: Registro exitoso.
 *       400:
 *         description: Datos de registro inválidos.
 */

api.post('/register', customerController.register);

/**
 * @swagger
 * /api/readInfo:
 *   get:
 *     summary: Obtener la información de un cliente autenticado.
 *     tags: [Customer]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Información del cliente.
 *       401:
 *         description: No autorizado.
 */

api.get('/readInfo', ensureAuth, customerController.readInfo);

/**
 * @swagger
 * /api/readPackages:
 *   get:
 *     summary: Obtener los paquetes de un cliente autenticado.
 *     tags: [Customer]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de paquetes del cliente.
 *       401:
 *         description: No autorizado.
 */

api.get('/readPackages', ensureAuth, customerController.readPackages);

/**
 * @swagger
 * /api/updatePass/{id}:
 *   put:
 *     summary: Actualizar la contraseña de un cliente autenticado.
 *     tags: [Customer]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contraseña actualizada con éxito.
 *       401:
 *         description: No autorizado.
 *       404:
 *         description: Cliente no encontrado.
 */

api.put('/updatePass/:id', ensureAuth, customerController.updatePass);

/**
 * @swagger
 * /api/updateInfo:
 *   put:
 *     summary: Actualizar la información de un cliente autenticado.
 *     tags: [Customer]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Información actualizada con éxito.
 *       401:
 *         description: No autorizado.
 */

api.put('/updateInfo', ensureAuth, customerController.updateInfo);

/**
 * @swagger
 * /api/deleteProfile:
 *   delete:
 *     summary: Eliminar la cuenta de un cliente autenticado.
 *     tags: [Customer]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Cuenta eliminada con éxito.
 *       401:
 *         description: No autorizado.
 */

api.delete('/deleteProfile', ensureAuth, customerController.deleteAccount);

module.exports = api;
