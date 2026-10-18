const express = require('express');
const CRutas = require('../../controlador/admin/CrearClienteControlador');
const TRutas = require('../../controlador/admin/CrearTrabajadorControlador');
const ARutas = require('../../controlador/admin/CrearAdminControlador');
const LRutas = require('../../controlador/admin/LoginAdminControlador');


const router = express.Router();

router.post('/seguridad/crearCliente', CRutas.crearCliente); // RF01
router.post('/seguridad/crearTrabajador', TRutas.crearTrabajador); // RF04
router.post('/seguridad/crearAdmin', ARutas.crearAdmin); // RF05
router.post('/seguridad/loginAdmin', LRutas.validarCredencial);

module.exports = router;