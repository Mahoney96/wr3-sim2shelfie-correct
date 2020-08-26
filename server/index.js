

express = require('express');

const app = express();

app.use(express.json());


const port = 3993;



app.listen(port, () => console.log(`Your Server's working, Alright Alright Alright  ${port}`));


// require('dotenv').config();

// massive = require('massive');
// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {
//         rejectUnathorzed: false
//     }
// }).then((dbInstance) => {
//     applicationCache.set('db', dbInstance);
// });




