const express = require("express");
const productRouter = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


productRouter.get('/', getProducts);
productRouter.get("/:id", getProduct);

productRouter.post("/", createProduct);

// update a product
productRouter.put("/:id", updateProduct);

// delete a product
productRouter.delete("/:id", deleteProduct);



module.exports = productRouter;