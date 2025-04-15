const express = require('express'); 
const router = express.Router(); 

const SuporteController = require('../controllers/suporte'); 

router.get('/suporte', SuporteController.listarSuporte); 
router.post('/suporte', SuporteController.cadastrarSuporte); 
router.patch('/suporte', SuporteController.editarSuporte); 
router.delete('/suporte', SuporteController.apagarSuporte); 


module.exports = router;