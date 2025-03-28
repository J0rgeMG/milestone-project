// This file will help saving session cookies into our mongo database

// Third party packages
const expressSesion = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore() {
    const MongoDbStore = mongoDbStore(expressSesion);

    // Configuration of the conection to our database
    const store = new MongoDbStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'online-shop',
        collection: 'sessions'
    });

    return store;
}

// Configuration of the session cookie
function createSessionConfig() {
    return {
        secret: 'super-secret',
        resave: false,
        saveUnintialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2 * 24 * 60 * 60 * 1000
        }
    };
}

module.exports = createSessionConfig;