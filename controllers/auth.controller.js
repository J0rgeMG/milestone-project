// Middleware functions
function getSignup(req, res){
    res.render('customer/auth/signup');
}

// Handles user signup form and saving the data into the database
function signup(req, res) {
    
}

function getLogin(req, res){
    // To complete 
}

// Exports
module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
    signup: signup
};