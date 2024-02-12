require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: '*', // Altere para o domínio do seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar cookies, se necessário
}));

const imagemRoute = require('./src/routes/imagem.route');
const categoriaRoute = require('./src/routes/categoria.route');



//rotas
app.use('/api/imagem', imagemRoute);
app.use('/api/categoria', categoriaRoute);

app.listen(process.env.PORT, () => {console.log('API Rodando na porta '+ process.env.PORT)})