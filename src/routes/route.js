const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const productController = require('../controller/productController');
const orderController = require('../controller/orderController');
const middleware = require('../middleware/commonMiddleware');


router.post('/createUsers', middleware.mid1,userController.createUsers);
router.post('/createProduct', productController.createProduct);
router.post('/createOrder', middleware.mid1, orderController.createOrder);


module.exports = router;