const express = require('express');
const LTRutas = require('../../controlador/trabajadores/LoginTrabajadorControlador');

const router = express-Router();

router.post('/trabajador/login', LTRutas.validarCredencial); // RF03

module.exports = router;