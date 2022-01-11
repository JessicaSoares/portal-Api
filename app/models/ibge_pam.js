const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ibge_pam', {
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
    tableName: 'ibge_pam',
    schema: 'producao_agricola_municipal',
    timestamps: false,
    indexes: [
      {
        name: "idx_ibge_pam_lookup",
        fields: [
          { name: "codigo" },
          { name: "municipio" },
          { name: "variavel" },
          { name: "ano" },
          { name: "produto" },
          { name: "valor" },
        ]
      },
    ]
  });
};
