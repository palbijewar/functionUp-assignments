const express = require('express');
const lodash = require('lodash');
const booksController = require('../controller/booksController');

const { route } = require('express/lib/application');
const router = express.Router();

router.post('/createBook', booksController.createBook);
router.get('/checkAuthorId', booksController.checkAuthorId);
router.get('/validateAuthorId', booksController.validateAuthorId);
router.get('/checkPublisherId', booksController.checkPublisherId);
router.get('/validatePublisherId', booksController.validatePublisherId);
router.get('/fetchAllBooks', booksController.fetchAllBooks);
router.put('/updateBooks', booksController.updateBooks);
router.put('/updatePrice', booksController.updatePrice);


module.exports = router;