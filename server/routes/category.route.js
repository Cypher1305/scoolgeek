const express = require('express');
const categoryRouter = express.Router();
const {getCategories, getCategory, createCategory, updateCategory, deleteCategory} = require('../controllers/category.controller.js');  

categoryRouter.get('/', getCategories);
categoryRouter.get("/:id", getCategory);

categoryRouter.post("/", createCategory);

// update a category
categoryRouter.put("/:id", updateCategory);

// delete a category
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;