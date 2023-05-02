const express = require('express');
const lodash = require('lodash');
const booksController = require('../controller/booksController');
const authorsController = require('../controller/authorsController');

const { route } = require('express/lib/application');
const router = express.Router();

router.post('/authors', authorsController.authors);
router.get('/getAuthors', authorsController.getAuthors);
router.get('/getIds', authorsController.getIds);


module.exports = router;