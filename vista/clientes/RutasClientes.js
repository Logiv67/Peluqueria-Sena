const express = require('express');
const CRutas = requiere('../../controlador/clientes/CrearClienteControlador');
const LCRutas = requiere('../../controlador/clientes/LoginClienteControlador');
const MCRutas = requiere('../../controlador/clientes/DesactivarClienteControlador');
const router = express-Router();

router.post('/usuario(crear', CRutas.crearCliente); // RF02
router.post('/cliente(login', LCRutas.validarCredencial); // RF03
router.put('usuario/desactivar', MCRutas.modificarestado)
module.exports = router;
