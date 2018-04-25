'use strict';

module.exports = (sequelize, DataTypes) => {
  const tbPerson = sequelize.define('tbPerson', {
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
    pID: {
      type: DataTypes.STRING,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Gender: {
      type: DataTypes.INTEGER,
    },
    pType: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'tbPerson'
  });

  tbPerson.associate = function(models) {
    tbPerson.hasMany(models.tbChoice, { foreignKey: 'pID', sourceKey: 'pID' });
    tbPerson.hasMany(models.tbScore, { foreignKey: 'pID', sourceKey: 'pID' });
  };

  return tbPerson;
};
