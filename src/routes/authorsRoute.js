const express = require('express');
const lodash = require('lodash');
const authorsController = require('../controller/authorsController');

const { route } = require('express/lib/application');
const router = express.Router();

router.post('/authors', authorsController.authors)


module.exports = router;