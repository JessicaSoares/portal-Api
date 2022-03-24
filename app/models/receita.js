const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receita', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datamovimento: {
      type: DataTypes.DATEONLY,
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
      type: DataTypes.DOUBLE,
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
    timestamps: false,
    indexes: [
      {
        name: "receita_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
