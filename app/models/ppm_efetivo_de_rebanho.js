const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppm_efetivo_de_rebanho', {
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
    tipo_rebanho: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ano: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppm_efetivo_de_rebanho',
    schema: 'producao_pecuaria_municipal',
    timestamps: false
  });
};
