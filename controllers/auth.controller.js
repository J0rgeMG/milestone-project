// Middleware functions
function getSignup(req, res){
    res.render('customer/auth/signup');
}

function getLogin(req, res){
    // To complete 
}

// Exports
module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    
};