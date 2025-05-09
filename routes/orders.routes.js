// Third party packages
const express = require('express');

// First party packages
const ordersController = require('../controllers/orders.controller');

// Loading router
const router = express.Router();

// Routes
router.post('/', ordersController.addOrder);

// Exports
module.exports = router;