'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.hasMany(models.Imagem, {foreignKey: 'catId'});
    }
  }
  Categoria.init({
    catId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
    },
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categoria',
  });
  return Categoria;
};