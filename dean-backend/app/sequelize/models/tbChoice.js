'use strict';

module.exports = (sequelize, DataTypes) => {
  const tbChoice = sequelize.define('tbChoice', {
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
      allowNull: false
    },
  }, {
    tableName: 'tbChoice'
  });

  tbChoice.associate = function(models) {
    tbChoice.belongsTo(models.tbPerson, { foreignKey: 'pID', targetKey: 'pID' });
    tbChoice.belongsTo(models.tbLesson, { foreignKey: 'cID', targetKey: 'cID' });
  };

  return tbChoice;
};
