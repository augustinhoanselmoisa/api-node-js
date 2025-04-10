const express = require('express'); 
const router = express.Router(); 

const SuporteController = require('../controllers/Suporte'); 

router.get('/suporte', SuporteController.listarSuporte); 
router.post('/suporte', SuporteControllers.cadastrarSuporte); 
router.patch('/suporte', SuporteControllers.editarSuporte); 
router.delete('/suporte', SuporteControllers.apagarSuporte); 


module.exports = router;