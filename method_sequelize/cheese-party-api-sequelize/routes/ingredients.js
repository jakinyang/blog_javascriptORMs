const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.Cheese.findAll({ include: {model: db.Ingredient} })
      .then((data) => {
        console.log(`Response from query to api/ingredients/: `, JSON.stringify(data, null, 2));
        res.send(JSON.stringify(data, null, 2));
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  router.get('/:ingredientid', (req, res) => {
    const id = req.params.ingredientid;
    db.Ingredient.findByPk(id)
    .then((data) => {
      console.log(`Response from query to api/ingredients/${id}: `, JSON.stringify(data, null, 2));
      res.send(JSON.stringify(data, null, 2));
    })
    .catch((err) => {
      console.log(err.message);
    });
  });
  return router;
}