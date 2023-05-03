const express = require('express');
const lodash = require('lodash');
const publishersController = require('../controller/publishersController');

const { route } = require('express/lib/application');
const router = express.Router();

router.post('/createPublishers', publishersController.createPublishers);

module.exports = router;