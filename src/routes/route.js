const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController = require("../controller/bookController.js")


router.post("/book", bookController.createBook  );

router.get("/getUsersData", bookController.getBook);

module.exports = router;