const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.Cheese.findAll({ include: {model: db.Category} })
      .then((data) => {
        console.log(`Response from query to api/categories/: `, JSON.stringify(data, null, 2));
        res.send(JSON.stringify(data, null, 2));
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  router.get('/:categoryid', (req, res) => {
    const id = req.params.categoryid;
    db.Category.findByPk(id)
    .then((data) => {
      console.log(`Response from query to api/categories/${id}: `, JSON.stringify(data, null, 2));
      res.send(JSON.stringify(data, null, 2));
    })
    .catch((err) => {
      console.log(err.message);
    });
  });
  return router;
}