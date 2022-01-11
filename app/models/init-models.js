var DataTypes = require("sequelize").DataTypes;
var _agricultura_familiar = require("./agricultura_familiar");
var _atendimento = require("./atendimento");
var _aves = require("./aves");
var _bovinocultura = require("./bovinocultura");
var _categoria = require("./categoria");
var _credor = require("./credor");
var _customers = require("./customers");
var _elemento_despesa = require("./elemento_despesa");
var _exercicio = require("./exercicio");
var _folha_pagamento = require("./folha_pagamento");
var _fonte = require("./fonte");
var _ibge_pam = require("./ibge_pam");
var _indicador = require("./indicador");
var _movimentacao_de_emprego_caged = require("./movimentacao_de_emprego_caged");
var _ocupacao = require("./ocupacao");
var _orgaos_api = require("./orgaos_api");
var _pagamento_despesas_api = require("./pagamento_despesas_api");
var _personagens = require("./personagens");
var _pib = require("./pib");
var _ppm_efetivo_de_rebanho = require("./ppm_efetivo_de_rebanho");
var _ppm_producao_animal = require("./ppm_producao_animal");
var _produtos_cap = require("./produtos_cap");
var _queimadas = require("./queimadas");
var _rebanho_bovino = require("./rebanho_bovino");
var _receita = require("./receita");
var _teste = require("./teste");
var _teste = require("./teste");
var _teste = require("./teste");
var _testee = require("./testee");
var _tutorials = require("./tutorials");
var _usuaria = require("./usuaria");

function initModels(sequelize) {
  var agricultura_familiar = _agricultura_familiar(sequelize, DataTypes);
  var atendimento = _atendimento(sequelize, DataTypes);
  var aves = _aves(sequelize, DataTypes);
  var bovinocultura = _bovinocultura(sequelize, DataTypes);
  var categoria = _categoria(sequelize, DataTypes);
  var credor = _credor(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var elemento_despesa = _elemento_despesa(sequelize, DataTypes);
  var exercicio = _exercicio(sequelize, DataTypes);
  var folha_pagamento = _folha_pagamento(sequelize, DataTypes);
  var fonte = _fonte(sequelize, DataTypes);
  var ibge_pam = _ibge_pam(sequelize, DataTypes);
  var indicador = _indicador(sequelize, DataTypes);
  var movimentacao_de_emprego_caged = _movimentacao_de_emprego_caged(sequelize, DataTypes);
  var ocupacao = _ocupacao(sequelize, DataTypes);
  var orgaos_api = _orgaos_api(sequelize, DataTypes);
  var pagamento_despesas_api = _pagamento_despesas_api(sequelize, DataTypes);
  var personagens = _personagens(sequelize, DataTypes);
  var pib = _pib(sequelize, DataTypes);
  var ppm_efetivo_de_rebanho = _ppm_efetivo_de_rebanho(sequelize, DataTypes);
  var ppm_producao_animal = _ppm_producao_animal(sequelize, DataTypes);
  var produtos_cap = _produtos_cap(sequelize, DataTypes);
  var queimadas = _queimadas(sequelize, DataTypes);
  var rebanho_bovino = _rebanho_bovino(sequelize, DataTypes);
  var receita = _receita(sequelize, DataTypes);
  var teste = _teste(sequelize, DataTypes);
  var teste = _teste(sequelize, DataTypes);
  var teste = _teste(sequelize, DataTypes);
  var testee = _testee(sequelize, DataTypes);
  var tutorials = _tutorials(sequelize, DataTypes);
  var usuaria = _usuaria(sequelize, DataTypes);

  indicador.belongsTo(categoria, { as: "categorium", foreignKey: "categoria_id"});
  categoria.hasMany(indicador, { as: "indicadors", foreignKey: "categoria_id"});
  indicador.belongsTo(fonte, { as: "fonte", foreignKey: "fonte_id"});
  fonte.hasMany(indicador, { as: "indicadors", foreignKey: "fonte_id"});

  return {
    agricultura_familiar,
    atendimento,
    aves,
    bovinocultura,
    categoria,
    credor,
    customers,
    elemento_despesa,
    exercicio,
    folha_pagamento,
    fonte,
    ibge_pam,
    indicador,
    movimentacao_de_emprego_caged,
    ocupacao,
    orgaos_api,
    pagamento_despesas_api,
    personagens,
    pib,
    ppm_efetivo_de_rebanho,
    ppm_producao_animal,
    produtos_cap,
    queimadas,
    rebanho_bovino,
    receita,
    teste,
    teste,
    teste,
    testee,
    tutorials,
    usuaria,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
