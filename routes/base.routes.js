// Third party packages
const express = require('express');

// First party packages
const authController = require('../controllers/auth.controller');

// Loading router
const router = express.Router();

// Routes WIP
router.get('/',function(req, res) {
    res.redirect('/products');
});

// Exports
module.exports = router;