const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    const query = `
    SELECT 
      c.id AS cheese_id, 
      c.name AS cheese,
      cat.name AS category
    FROM cheeses AS c
    JOIN cheese_categories AS chat
    ON chat.cheese_id = c.id
    JOIN categories AS cat
    ON cat.id = chat.category_id
    GROUP BY c.id, c.name, cat.name
    ORDER BY c.id;
    `;
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
      SELECT name AS category
      FROM categories
      JOIN cheese_categories AS chcat
      ON chcat.category_id = categories.id
      WHERE chcat.cheese_id = $1;
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