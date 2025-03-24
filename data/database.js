// Third packages
const mongodb = require('mongodb');

// We configure the MongoClient that will connect to our mongo databse
const MongoClient = mongodb.MongoClient;

// We connect with the database
let database;

async function connectToDatabase() {
    const databaseUrl = 'mongodb://localhost:27017';
    const databaseName = 'online-shop';

    const client = await MongoClient.connect(databaseUrl);
    database = client.db(databaseName);
}

// funtion that exposes to the other files 
function getDb() {
    if (!database) {
        throw new Error('You must connect to the database first!');
    }

    return database;
}

// Exports
module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
};