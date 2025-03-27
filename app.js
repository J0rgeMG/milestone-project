// Buit-in packages
const path = require('path');

// Third party packages
const express = require('express');
const csrf = require('csurf');

// Our packages
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const authRoutes = require('./routes/auth.routes');

// Loading app
const app = express();

// App configuration
app.set('view engine', 'ejs'); // We set EJS as our view engine
app.set('views', path.join(__dirname, 'views')); // We tell app where our views are located
// Configure static, public files
app.use(express.static('public'));
// Configure the app with urlencoded so we can use forms in req bodies
app.use(express.urlencoded({ extended: false }));

// Middleware
// Add csurf to protect against CSRF attacks
app.use(csrf());
app.use(addCsrfTokenMiddleware);
// Loading the routers
app.use(authRoutes);
// Handling errors
app.use(errorHandlerMiddleware);

// Starting the app, 3000 as default port
db.connectToDatabase().then(function() {
    // <domain>:3000
    app.listen(3000);
}).catch(function(error) {
    console.log('Failed to connect to the database!');
    console.log(error);
});