// Third party packages
const express = require('express');

// Our packages
const authRoutes = require('./routes/auth.routes');

// Loading app
const app = express();

// Loading the routers
app.use(authRoutes);

// Starting the app, 3000 as default port
// <domain>:3000
app.listen(3000);