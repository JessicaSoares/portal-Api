const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aves', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    capacidadetotalalojamento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    finalidadeavicultura: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    finalidadecorte: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    finalidadepostura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    freqvendaabate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    freqvendamensal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    freqvendaoutros: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    freqvendasemanal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    freqvendatrimestral: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    geneticaavescaipira: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    geneticaavesindustrial: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idadeaoabate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    incubadora: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ingredientesdaracaoproduzida: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    localvendaabatedouro: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    localvendafeiralivre: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    localvendafrigorifico: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    localvendanapropriedade: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    localvendaoutros: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    localvendasupermercado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    objetivoconsumo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    objetivoincubadoracriacao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    objetivoincubadoravenda: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    objetivovenda: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pesomedio: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    principaisentraves: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    prodsemanalovos: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    producaomensaldepintos: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    produtoscomercfrangaspostura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercfrangoabatido: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercfrangovivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercovos: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercovosferteis: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercpinto1dia: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercreprodutores: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    qtdanimaisalojados: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qtdavesparavenda: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qtdgalpoesavicultura: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    quaisvacinas: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    quantpessoas: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    racaocomercialcrescimento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    racaocomercialinicial: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    racaocomercialmarca: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    racaocomercialterminacao: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    racaoproduzidacrescimento: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    racaoproduzidainicial: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    racaoproduzidaterminacao: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sistemacriacaoextensivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sistemacriacaointensivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sistemacriacaosemiintensivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vacinas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aves',
    schema: 'prorural',
    timestamps: false
  });
};
