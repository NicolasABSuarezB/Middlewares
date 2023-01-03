const express = require('express');
const router = express.Router();

const { main, about, register, processRegister, login, processLogin } = require('../controllers/mainControllers');

router.get('/', main);
router.get('/about', about);

router.get('/register', register);
router.post('/register', processRegister);

router.get('/login', login);
router.post('/login', processLogin);

module.exports = router;