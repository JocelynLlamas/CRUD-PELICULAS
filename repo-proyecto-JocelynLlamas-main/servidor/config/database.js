const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});

const conectarDB = async ()=> {
    try {
        await mongoose.connect(process.env.DB_PELICULA, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log('base conectada');

    } catch (error) {
        console.log(error);
        // DETENER
        process.exit(1);
    }
}

module.exports = conectarDB