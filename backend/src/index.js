const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

/**
 * Tipos de Parametros:
 * Query params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
 * Route params : Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
