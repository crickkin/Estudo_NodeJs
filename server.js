const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando Database
mongoose.connect(
    'mongodb+srv://crickkin:petricor63@cluster0-dviqe.mongodb.net/CursoNodeJs?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
/* Metódo de requerimento do model sem utilizar api */
// require('./src/models/Product');
/* Método de requirimento do model utilizando a api */
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);