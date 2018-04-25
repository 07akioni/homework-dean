'use strict';

module.exports = (sequelize, DataTypes) => {
  const tbScore = sequelize.define('tbScore', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    cID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Score: {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'tbScore'
  });

  tbScore.associate = function(models) {
    tbScore.belongsTo(models.tbPerson, { foreignKey: 'pID', targetKey: 'pID' });
    tbScore.belongsTo(models.tbLesson, { foreignKey: 'cID', targetKey: 'cID' });
  };

  return tbScore;
};
