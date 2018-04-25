'use strict';

module.exports = (sequelize, DataTypes) => {
  const tbTeach = sequelize.define('tbTeach', {
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
    tableName: 'tbTeach'
  });
  
  tbTeach.associate = function(models) {
    tbTeach.belongsTo(models.tbPerson, { foreignKey: 'pID', targetKey: 'pID' });
    tbTeach.belongsTo(models.tbLesson, { foreignKey: 'cID', targetKey: 'cID' });
  };
  
  return tbTeach;
};
