const express = require('express');
const lodash = require('lodash');
const booksController = require('../controller/booksController');
const authorsController = require('../controller/authorsController');

const { route } = require('express/lib/application');
const router = express.Router();

router.post('/getBooks', booksController.createBooks);
router.get('/getBooks', booksController.getBooks);
router.get('/chetanBhagatBooksIds', booksController.chetanBhagatBooksIds);
router.get('/getChetansBooks', booksController.getChetansBooks);
router.get('/updatePrice', booksController.updatePrice);
router.get('/findBook', booksController.findBook);

module.exports = router;