// Buit-in packages
const path = require('path');

// Third party packages
const express = require('express');

// Our packages
const db = require('./data/database');
const authRoutes = require('./routes/auth.routes');

// Loading app
const app = express();

// App configuration
app.set('view engine', 'ejs'); // We set EJS as our view engine
app.set('views', path.join(__dirname, 'views')); // We tell app where our views are located
// Configure static, public files
app.use(express.static('public'));

// Loading the routers
app.use(authRoutes);

// Starting the app, 3000 as default port
db.connectToDatabase().then(function() {
    // <domain>:3000
    app.listen(3000);
}).catch(function(error) {
    console.log('Failed to connect to the database!');
    console.log(error);
});