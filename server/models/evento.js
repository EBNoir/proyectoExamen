const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    titulos: String,
    descrpition: String,
    imagen: String
});

module.exports = mongoose.model('Evento', eventoSchema);
