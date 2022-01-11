const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pib', {
    codigo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    municipio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    variavel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ano: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pib',
    schema: 'pib_ibge',
    timestamps: false,
    indexes: [
      {
        name: "idx_pib_lookup",
        fields: [
          { name: "codigo" },
          { name: "municipio" },
          { name: "variavel" },
          { name: "ano" },
          { name: "valor" },
        ]
      },
    ]
  });
};
