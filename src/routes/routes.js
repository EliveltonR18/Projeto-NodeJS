const express = require('express');
const ProductController = require ('../controllers/productController.js');
const router = express.Router();

router.post('/produtos', ProductController.Insert);
 
module.exports = router;