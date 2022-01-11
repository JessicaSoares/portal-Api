const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppm_producao_animal', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    municipio: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    variavel: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ano: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    produto: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppm_producao_animal',
    schema: 'producao_pecuaria_municipal',
    timestamps: false
  });
};
