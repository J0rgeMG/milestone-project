// Third party packages
const express = require('express');

// First party packages
const productsController = require('../controllers/products.controller');

// Loading router
const router = express.Router();

// Routes WIP
router.get('/products', productsController.getAllProducts);

// Exports
module.exports = router;