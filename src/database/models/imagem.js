'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Imagem.belongsTo(models.Categoria, {foreignKey: 'catId'})
    }
  }
  Imagem.init({
    nome: DataTypes.STRING,
    imgId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    catId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    extensao: DataTypes.STRING,
    tamanho: DataTypes.INTEGER,
    resolucao: DataTypes.STRING,
    tags: DataTypes.STRING,
    aprovada: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Imagem',
    tableName: 'Imagem',
  });
  return Imagem;
};