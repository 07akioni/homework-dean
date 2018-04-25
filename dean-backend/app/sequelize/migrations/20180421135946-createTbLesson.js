'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbLesson', {
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
      },
      cName: {
        type: Sequelize.STRING,
      },
    })
    .then(() => queryInterface.addIndex('tbLesson', {
      fields: [ 'cID' ],
      name: 'tbLesson_cID_index',
    }))
    .then(() => queryInterface.addConstraint('tbLesson', [ 'cID' ], {
      type: 'unique',
      name: 'tbLesson_cID_unique'
    }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbLesson');
  },
};
