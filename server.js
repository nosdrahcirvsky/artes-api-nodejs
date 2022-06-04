const express = require("express");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:4000"
};

app.use(cors(corsOptions));

// Configurando o CORS para permitir o acesso
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Fazer o parse de requisições do tipo application/json
app.use(express.json());

// Fazer o parse de requisições do tipo application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// Comentar a linha abaixo após executar o projeto pela primeira vez
db.sequelize.sync({ alter: true });

// Se a tabela já existe, fazer o drop e sincronizar
// db.sequelize.sync({ force: true });

// Rota simples
app.get("/", (req, res) => {
  res.json({ message: "API inicializada" });
});

require("./app/routes/api.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`);
});
