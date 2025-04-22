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

// Error handling routes
router.get('401', function(req, res){
    res.status(401).render('shared/401');
});
router.get('403', function(req, res){
    res.status(403).render('shared/403');
});

// Exports
module.exports = router;