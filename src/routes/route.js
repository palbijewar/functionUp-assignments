const express = require('express');
const lodash = require('lodash');
const controller = require('../controller/controller');
const middleware = require('../midddleware/commonMiddleware');


const { route } = require('express/lib/application');
const router = express.Router();

router.get('/mainPage', middleware.mid1, controller.mainPage)

module.exports = router;