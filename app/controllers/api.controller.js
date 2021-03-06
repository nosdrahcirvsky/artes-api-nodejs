const request = require('request');
const Consulta = require("./consulta.controller");

// Obter dados da API
exports.findAll = (req, res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,date_start'
  }

  request(options, function (error, response) {
    if (error) throw new Error(error);

    // Converte o corpo para JSON
    let result = JSON.parse(response.body);

    // Retorna o array com os resultados da API
    res.send(result.data);
  })
};

// Filtrar os dados da API por campo
exports.filterBy = (req, res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.artic.edu/api/v1/artworks?fields=' + req.params.field
  }

  request(options, function (error, response) {
    if (error) throw new Error(error);

    // Salva os parâmetros da consulta no DB
    Consulta.create(req, res);

    // Converte o corpo para JSON
    let result = JSON.parse(response.body);

    // Retorna o array com os resultados da API
    res.send(result.data);
  })
};
