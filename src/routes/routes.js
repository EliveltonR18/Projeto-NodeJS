const express = require('express');
const ProductController = require ('../controllers/productController.js');
const router = express.Router();

router.post('/inserir', ProductController.Insert);
router.post('/alterar', ProductController.Alter);
router.post('/excluir', ProductController.Drop);
router.post('/selecionar', ProductController.Select);
 
module.exports = router;