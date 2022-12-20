const router = require("express").Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    const query = `
    SELECT 
      c.id AS cheese_id, 
      c.name AS cheese,
      ing.name AS ingredient
    FROM cheeses AS c
    JOIN cheese_ingredients AS ching
    ON ching.cheese_id = c.id
    JOIN ingredients AS ing
    ON ing.id = ching.ingredient_id
    GROUP BY c.id, c.name, ing.name
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
      SELECT name AS ingredient
      FROM ingredients
      JOIN cheese_ingredients AS ching
      ON ching.ingredient_id = ingredients.id
      WHERE ching.cheese_id = $1;
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