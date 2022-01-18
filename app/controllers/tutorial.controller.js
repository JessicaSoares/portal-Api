const db = require("../models");
const Tutorial = db.tutorials;
const Queimadas = db.defesas;
const FolhaPagamento = db.folhapagamento;
const Aves = db.aves;
const AgriFamiliar = db.agrifamiliar;
const Op = db.Sequelize.Op;

const CsvParser = require("json2csv").Parser;

exports.download = (req, res) => {
  Tutorial.findAll().then((objs) => {
    let tutorials = [];

    objs.forEach((obj) => {
      const { ano, mes, grupo, setor, admitidos, desligados, saldo, estoque } = obj;
      tutorials.push({ ano, mes, grupo, setor, admitidos ,desligados, saldo, estoque });
    });

    const csvFields = ["Ano", "mes", "grupo", "setor","admitidos", "desligados", "saldo"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(tutorials);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");

    res.status(200).end(csvData);
  });
};

exports.downloaddefesas = (req, res) => {
  Queimadas.findAll().then((objs) => {
    let defesas = [];

    objs.forEach((obj) => {
      const { data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais , area_afetada, status, lat, log } = obj;
      defesas.push({ data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais , area_afetada, status, lat, log });
    });

    const csvFields = ["data", "hora", "duracao", "endereco","bairro", "muncipio", "natureza" , "danos_estruturais", "area_afetada" , "status", "lat", "log"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(defesas);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=defesas.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadfolhapagamento = (req, res) => {
  FolhaPagamento.findAll().then((objs) => {
    let defesas = [];

    objs.forEach((obj) => {
      const { data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais , area_afetada, status, lat, log } = obj;
      defesas.push({ data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais , area_afetada, status, lat, log });
    });

    const csvFields = ["data", "hora", "duracao", "endereco","bairro", "muncipio", "natureza" , "danos_estruturais", "area_afetada" , "status", "lat", "log"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(defesas);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=folhadepagamento.csv");

    res.status(200).end(csvData);
  });
};


exports.downloadagrifamiliar = (req, res) => {
  AgriFamiliar.findAll().then((objs) => {
    let defesas = [];

    objs.forEach((obj) => {
      const { bairro, datanascimento, escolaridade, estadocivil, feirante, tipoprodutor } = obj;
      defesas.push({ bairro, datanascimento, escolaridade, estadocivil, feirante, tipoprodutor });
    });

    const csvFields = ["bairro", "datanascimento", "escolaridade", "estadocivil","feirante", "tipoprodutor"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(defesas);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};



// Create and Save a new Tutorial
exports.create = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // Valanoate request
  if (!req.body.grupo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    grupo: req.body.grupo,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const grupo = req.query.grupo;
  var condition = grupo ? { grupo: { [Op.like]: `%${grupo}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an ano
exports.findOne = (req, res) => {
  const ano = req.params.ano;

  Tutorial.findByPk(ano)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with ano=${ano}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with ano=" + ano
      });
    });
};

// Update a Tutorial by the ano in the request
exports.update = (req, res) => {
  const ano = req.params.ano;

  Tutorial.update(req.body, {
    where: { ano: ano }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with ano=${ano}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with ano=" + ano
      });
    });
};

// Delete a Tutorial with the specified ano in the request
exports.delete = (req, res) => {
  const ano = req.params.ano;

  Tutorial.destroy({
    where: { ano: ano }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with ano=${ano}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with ano=" + ano
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
