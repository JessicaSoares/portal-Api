const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('queimadas', {
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hora: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duracao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    endereco: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bairro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    muncipio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    zona: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    natureza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    danos_estruturais: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    area_afetada: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    log: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'queimadas',
    schema: 'defesa_civil',
    timestamps: false,
    indexes: [
      {
        name: "idx_queimadas_lookup",
        fields: [
          { name: "data" },
          { name: "hora" },
          { name: "duracao" },
          { name: "endereco" },
          { name: "bairro" },
          { name: "muncipio" },
          { name: "zona" },
          { name: "natureza" },
          { name: "danos_estruturais" },
          { name: "area_afetada" },
          { name: "status" },
          { name: "lat" },
          { name: "log" },
        ]
      },
    ]
  });
};
