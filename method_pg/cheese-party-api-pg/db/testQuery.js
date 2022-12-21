const { poolDataBase } = require('./connection')

// This is our test SQL query we're going to use
const testQuery = `SELECT * FROM cheeses WHERE name = 'Gouda';`

// Use the newly instance of the Pool class
// The 'poolDataBase' object to query the database
// Pass in the testQuery to .query method
poolDataBase.query(testQuery)
  // .query returns a promise we can consume with .then/catch
  .then(data => {
    console.log(data.rows[0]);
    // This will return {id: 3, name: 'Gouda', origin: 'Netherlands'}
  })
  .catch(error => {
    console.log(error.message);
    // What did you do?!
  });