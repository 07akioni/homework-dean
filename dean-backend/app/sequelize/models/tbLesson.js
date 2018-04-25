'use strict';

module.exports = (sequelize, DataTypes) => {
  const tbLesson = sequelize.define('tbLesson', {
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
    },
    cName: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'tbLesson'
  });

  tbLesson.associate = function(models) {
    tbLesson.hasMany(models.tbScore, { foreignKey: 'cID', sourceKey: 'cID' });
    tbLesson.hasMany(models.tbTeach, { foreignKey: 'cID', sourceKey: 'cID' });
    tbLesson.hasMany(models.tbChoice, { foreignKey: 'cID', sourceKey: 'cID' });
  };

  return tbLesson;
};
