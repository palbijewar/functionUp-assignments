const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController = require("../controller/bookController.js")


router.post("/book", bookController.createBook  );

router.get("/getBook", bookController.getBook);

router.get("/getBooksInYear", bookController.getBooksInYear);

router.post("/getParticularBook", bookController.getParticularBook);

router.get("/getXINRBooks", bookController.getXINRBooks);

router.get("/getRandomBooks", bookController.getRandomBooks);


module.exports = router;