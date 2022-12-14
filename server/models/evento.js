const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    imagen: String,
    fecha: String,
    req: String
});

module.exports = mongoose.model('Evento', eventoSchema);
