const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receita', {
    datamovimento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numerodocumento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    codigo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contribuinte: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cnpjcpf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    especificacao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receita',
    schema: 'orcarmento',
    timestamps: false
  });
};
