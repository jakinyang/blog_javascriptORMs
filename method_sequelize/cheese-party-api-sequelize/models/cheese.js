'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cheese extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cheese.belongsToMany(models.Ingredient, { through: 'CheeseIngredients' });
      Cheese.belongsToMany(models.Category, { through: 'CheeseCategories' });
    }
  }
  Cheese.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    origin: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Cheese',
  });
  return Cheese;
};