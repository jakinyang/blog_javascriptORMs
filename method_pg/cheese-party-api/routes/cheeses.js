const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    const query = `
      SELECT 
        *
      FROM cheeses;`
    db.query(query)
      .then((response) => {
        console.log('Response from query: ', response.rows);
        res.send(response.rows);
      })
      .catch(err => {
        console.log(err.message);
      });
  });
  router.get('/:cheeseid', (req, res) => {
    const id = req.params.cheeseid;
    const queryParams = [id];
    const query = `
      SELECT name, origin
      FROM cheeses
      WHERE id = $1;
    `;
    db.query(query, queryParams)
      .then((response) => {
        console.log('Response from query: ', response.rows);
        res.send(response.rows);
      })
      .catch(err => {
        console.log(err.message);
      });
  });
  return router;
}