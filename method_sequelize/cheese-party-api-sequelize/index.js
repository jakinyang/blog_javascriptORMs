const express = require('express');
const bodyparser = require("body-parser");
const cors = require('cors');
const cheeses = require('./routes/cheeses');
const ingredients = require('./routes/ingredients');
const categories = require('./routes/categories');
const db = require('./models/index');


const app = express();
const PORT = 3333;

// Middle Ware
// cors for cross plaform - Note: "proxy" in package.json
app.use(cors());
app.use(bodyparser.json());

// Routers
app.use('/api/cheeses', cheeses(db));
app.use('/api/ingredients', ingredients(db));
app.use('/api/categories', categories(db));

app.get('/', (req, res) => {
  res.send("You're connected with the cheese-party-api");
});

app.listen(PORT, () => {
  console.log('Cheese Party API up on PORT: ', PORT);
})