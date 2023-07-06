const express = require('express');
const  {createProduct,getAllProduct,specificProduct,replaceProduct,updateProduct,deleteProduct,} = require('../product.controller/controller');
const productRoute = express.Router();

productRoute.post('/', createProduct);

productRoute.get('/', getAllProduct);

productRoute.get('/',specificProduct);

productRoute.put('/',replaceProduct);

productRoute.patch('/',updateProduct)

productRoute.delete('/',deleteProduct);

module.exports = productRoute;