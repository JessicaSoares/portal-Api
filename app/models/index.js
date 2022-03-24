const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.defesas = require("./defesa.model.js")(sequelize, Sequelize);
db.folhapagamento = require("./folhapagamento.model.js")(sequelize, Sequelize);
db.agrifamiliar = require("./agrifamiliar.model.js")(sequelize, Sequelize);
db.credor = require("./credor.model.js")(sequelize, Sequelize);
db.empregospormunicipio = require("./empregos_por_municipio.model.js")(sequelize, Sequelize);
db.empregosporsetor = require("./empregos_por_setor.model.js")(sequelize, Sequelize);
db.empregosporsexo = require("./empregos_por_sexo.model.js")(sequelize, Sequelize);
db.pib = require("./pib.model.js")(sequelize, Sequelize);
db.producaoagricola = require("./view_producao_agricola.model.js")(sequelize, Sequelize);
db.producaoanimal = require("./producao_animal.model.js")(sequelize, Sequelize);
db.rebanhomunicipal = require("./rebanho_municipal.model.js")(sequelize, Sequelize);
db.aves = require("./aves.model.js")(sequelize, Sequelize);
db.bovinos = require("./bovinos.model.js")(sequelize, Sequelize);
db.produtoscap = require("./produtos_cap.model.js")(sequelize, Sequelize);

db.importacao = require("./importacao.model.js")(sequelize, Sequelize);
db.exportacao = require("./exportacao.model.js")(sequelize, Sequelize);
db.saldo = require("./saldo.model.js")(sequelize, Sequelize);

module.exports = db;
