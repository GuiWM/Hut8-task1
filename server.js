const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


// Iniciando o App
const app = express()
app.use(express.json()) //Permitir enviar dados para a aplicacao no formato JSON

require('dotenv/config')


//Iniciando o DB
mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


requireDir('./src/models')

const Product = mongoose.model("Product")


//Rotas
app.use('/api', require('./src/routes')) // n precisa do api

app.listen(3001)