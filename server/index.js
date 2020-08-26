

require('dotenv').config();

express = require('express');
massive = require('massive');




massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnathorzed: false
    }
}).then((dbInstance) => {
    applicationCache.set('db', dbInstance);
});