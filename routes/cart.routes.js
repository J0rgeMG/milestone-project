// Third party packages
const express = require('express');

// First party packages
const cartController = require('../controllers/cart.controller');

// Loading router
const router = express.Router();

// Routes
router.post('/items', cartController.addCartItem);

// Exports
module.exports = router;