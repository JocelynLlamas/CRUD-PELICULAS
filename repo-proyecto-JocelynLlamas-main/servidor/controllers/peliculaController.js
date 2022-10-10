const Pelicula = require("../models/Pelicula");
const { param } = require("../routes/pelicula");

exports.peliculaCreada = async (peticion, respuesta) => {
    

    try {
        let pelicula;

        // CREACION DE PELICULA
        pelicula = new Pelicula(peticion.body);

        await pelicula.save();
        respuesta.send(pelicula);
        
    } catch (error) {
        console.log(error);
        respuesta.status(500).send('Error');
    }
}

exports.peliculaObtenida = async (peticion, respuesta) => {
    

    try {
        const peliculas = await Pelicula.find();
        respuesta.json(peliculas)
        
    } catch (error) {
        console.log(error);
        respuesta.status(500).send('Error');
    }
}

exports.peliculaActualizada = async (peticion, respuesta) =>{
    try {
        const {nombre, genero, director, anio} = peticion.body;
        // OBTENER ID 
        let pelicula = await Pelicula.findById(peticion.params.id);

        if(!pelicula){
            respuesta.status(404).json({msg: 'Pelicula no existente'})
        }

        pelicula.nombre = nombre;
        pelicula.genero = genero;
        pelicula.director = director;
        pelicula.anio=anio;

        pelicula = await Pelicula.findOneAndUpdate({_id: peticion.params.id}, pelicula, {new: true});
        respuesta.json(pelicula);
        
    } catch (error) {
        console.log(error);
        respuesta.status(500).send('Error');
    }
}

exports.peliculaObtener = async (peticion, respuesta) =>{
    try {
        // OBTENER ID 
        let pelicula = await Pelicula.findById(peticion.params.id);

        if(!pelicula){
            respuesta.status(404).json({msg: 'Pelicula no existente'})
        }

        respuesta.json(pelicula);
        
    } catch (error) {
        console.log(error);
        respuesta.status(500).send('Error');
    }
}

exports.peliculaEliminada = async (peticion, respuesta) =>{
    try {
        // OBTENER ID 
        let pelicula = await Pelicula.findById(peticion.params.id);

        if(!pelicula){
            respuesta.status(404).json({msg: 'Pelicula no existente'})
        }
        
        await Pelicula.findOneAndRemove({_id: peticion.params.id});
        respuesta.json({msg: 'Pelicula eliminada'});
        
    } catch (error) {  
        console.log(error);
        respuesta.status(500).send('Error');
    }
}