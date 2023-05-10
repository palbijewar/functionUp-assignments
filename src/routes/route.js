const express = require('express');
const lodash = require('lodash');
const controller = require('../controller/usersController');
const auth = require('../middleware/auth')



const { route } = require('express/lib/application');
const router = express.Router();

router.post('/signUp', controller.users );
router.post('/login', controller.login );
router.get('/verification', auth.auth,controller.verification)
router.put('/update/:userId', auth.auth,controller.updateUser);
router.delete('/delete/:userId', auth.auth, controller.deleteUser);

module.exports = router;