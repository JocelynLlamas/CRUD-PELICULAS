const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

router.post('/', peliculaController.peliculaCreada);
router.get('/', peliculaController.peliculaObtenida);
router.put('/:id', peliculaController.peliculaActualizada);
router.get('/:id', peliculaController.peliculaObtener);
router.delete('/:id', peliculaController.peliculaEliminada);

module.exports=router;
