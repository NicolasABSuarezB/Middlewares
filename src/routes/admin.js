const express = require('express');
const router = express.Router();

const { list, crear, editar, eliminar, } = require('../controllers/adminControllers');
const adminLogs = require('../middlewares/adminLogs')

router.get('/', adminLogs, list);
router.get('/crearProducto', crear);
router.get('/editarProducto', editar);
router.get('/eliminarProducto', eliminar);

module.exports = router;