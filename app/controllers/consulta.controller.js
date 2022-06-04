const db = require("../models");
const Consulta = db.consultas;

// Cria e salva a consulta
exports.create = (req, res) => {
    // Valida requisição
    if (!req.params.field) {
        res.status(400).send({
            message: "Não pode ficar em branco!"
        });
        return;
    }

    // Cria a consulta
    const novaConsulta = {
        busca: req.url
    };

    // Salva consulta no banco
    Consulta.create(novaConsulta)
        .then(() => {})
        .catch(err => {
            res.status(500).send({ message: err.message || "Ocorreu algum erro ao salvar a consulta" });
        });
};
