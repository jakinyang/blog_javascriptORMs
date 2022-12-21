const db = require('./models/index');

db.Cheese.findByPk(3)
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(err => {
    console.error('Error in querying database with Sequelize: ', err);
  })