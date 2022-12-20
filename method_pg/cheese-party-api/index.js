const express = require('express');
const bodyparser = require("body-parser");
const cors = require('cors');
const cheeses = require('./routes/cheeses');
const ingredients = require('./routes/ingredients');
const categories = require('./routes/categories');
const { dbConnection } = require('./db/connection');


const app = express();
const PORT = 3333;

// Middle Ware
// cors for cross plaform - Note: "proxy" in package.json
app.use(cors());
app.use(bodyparser.json());

// Routers
app.use('/api/cheeses', cheeses(dbConnection));
app.use('/api/ingredients', ingredients(dbConnection));
app.use('/api/categories', categories(dbConnection));

app.get('/', (req, res) => {
  res.send("You're connected with the cheese-party-api");
});

app.listen(PORT, () => {
  console.log('Cheese Party API up on PORT: ', PORT);
})