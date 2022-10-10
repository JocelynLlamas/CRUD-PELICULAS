const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    anio:{
        type: Number,
        required: true
    },
    fechaInicio:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);