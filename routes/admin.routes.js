// Third party packages
const express = require('express');

// Our packages
const adminController = require('../controllers/admin.controller');

// Loading router
const router = express.Router();

// Routes WIP
router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);


// Exports
module.exports = router;