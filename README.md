# api-artes

Projeto solicitado para a vaga de estágio da Marques Consult.

- Aplicante: David Richardson

## Instalação

O projeto foi desenvolvido usando:

- Nodejs v16.15.1
- NPM v8.5.3
- MySQL v8

Primeiramente, é necessário criar um novo banco no MySQL chamado `consultasdb`. Após isso, instalar as dependências do projeto com `npm install` e, finalmente, iniciar o sistema com `node server.js` ou `nodemon server.js` (caso tenha o nodemon instalado).

> Nota: Após rodar o projeto pela primeira vez e o Sequelize criar a tabela `consulta` no DB, comente a linha 27 onde está `db.sequelize.sync({ alter: true });` no arquivo `server.js`, pois não será mais necessário alterar a tabela já criada.

## Uso

A API é bem simples e consiste de apenas duas rotas: /api/ e /api/filter/:field.

- localhost:4000/api/ -- acessa a [API pública do Instituto de Artes de Chicago](https://www.artic.edu/open-access/public-api) e retorna um array em JSON das obras com os campos `id`, `title` , `artist_title` e `date_start`.
- localhost:4000/api/filter/:field -- filtra os resultados por campo e salva a consulta realizada no banco de dados. Substitua `:field` por algum campo da API pública. Uma lista com todos eles pode ser encontrada [aqui](https://api.artic.edu/docs/#collections-2).
