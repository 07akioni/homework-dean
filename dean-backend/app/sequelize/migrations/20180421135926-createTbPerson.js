'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbPerson', {
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
      pID: {
        type: Sequelize.STRING,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Gender: {
        type: Sequelize.INTEGER,
      },
      pType: {
        type: Sequelize.STRING,
      },
    })
    .then(() => queryInterface.addIndex('tbPerson', {
      fields: [ 'pID' ],
      name: 'tbPerson_pID_index',
    }))
    .then(() => queryInterface.addConstraint('tbPerson', [ 'pID' ], {
      type: 'unique',
      name: 'tbPerson_pID_unique'
    }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbPerson');
  },
};
