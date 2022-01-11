const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agricultura_familiar', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    apelido: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    apelidoconjuge: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    cpfconjuge: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    datanascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    escolaridade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estadocivil: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    feirante: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    logradouro: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    municipio: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    nomeconjuge: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    orgaoemissor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    orgaoemissorrgconjuge: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    residenoimovel: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    rg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    rgconjuge: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pais_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sindicato_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    datanascimentoconjuge: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tipoprodutor: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nis: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    data_cadastro: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agricultura_familiar',
    schema: 'prorural',
    timestamps: false
  });
};
