// Third party packages
const express = require('express');

// First party packages
const cartController = require('../controllers/cart.controller');

// Loading router
const router = express.Router();

// Routes
router.get('/', cartController.getCart);

router.post('/items', cartController.addCartItem);

router.patch('/items', cartController.updateCartItem);

// Exports
module.exports = router;