'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbChoice', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cID: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'tbLesson',
          key: 'cID',
        }
      },
      pID: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'tbPerson',
          key: 'pID',
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbChoice');
  },
};
