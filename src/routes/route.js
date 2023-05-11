const express = require('express');
const lodash = require('lodash');
const controller = require('../controller/usersController');
const auth = require('../middleware/auth');


const { route } = require('express/lib/application');
const usersModel = require('../models/usersModel');
const router = express.Router();

router.post('/signUp',controller.users );
router.post('/login', controller.login);
router.get('/verify/:userId', auth.auth,controller.verify)
router.put('/update/:userId', auth.auth,controller.update)
router.delete('/delete/:userId', auth.auth, controller.deleteUser)

module.exports = router;