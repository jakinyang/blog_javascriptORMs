const express = require('express');
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();

const PORT = 3333;

app.use(cors());
app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send("You're connected with the cheese-party-api");
});

app.listen(PORT, () => {
  console.log('Cheese Party API up on PORT: ', PORT);
})