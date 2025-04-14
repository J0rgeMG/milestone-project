// Third party packages
const express = require('express');

// Our packages
const adminController = require('../controllers/admin.controller');
const imageUploadMiddleware = require('../middlewares/image-upload');

// Loading router
const router = express.Router();

// Routes WIP
router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);

router.post('/products', imageUploadMiddleware, adminController.createNewProduct);

router.get('/products/:id', adminController.getUpdateProduct);

router.post('/products/:id', imageUploadMiddleware, adminController.updateProduct);


// Exports
module.exports = router;