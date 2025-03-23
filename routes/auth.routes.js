// Third party packages
const express = require('express');

// First party packages
const authController = require('../controllers/auth.controller');

// Loading router
const router = express.Router();

// Routes WIP
router.get('/signup', authController.getSignup);

router.get('/login', authController.getLogin);

// Exports
module.exports = router;
