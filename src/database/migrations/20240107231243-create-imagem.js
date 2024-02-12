'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagem', {
      imgId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      catId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'catId',
        },
      },

      url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      extensao: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      tamanho: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      resolucao: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      tags: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      aprovada: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagem');
  }
};