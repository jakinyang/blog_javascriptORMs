const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.Cheese.findAll()
      .then((data) => {
        console.log("Response from query to api/cheeses/: ", JSON.stringify(data, null, 2))
        res.send(JSON.stringify(data, null, 2));
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  router.get('/:cheeseid', (req, res) => {
    const id = req.params.cheeseid;
    db.Cheese.findByPk(id)
      .then((data) => {
        console.log(`Response from query to api/cheeses/${id}: `, JSON.stringify(data, null, 2))
        res.send(JSON.stringify(data, null, 2));
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return router;
}