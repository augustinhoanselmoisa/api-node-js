const express = require('express'); 
const router = express.Router(); 

const SuporteController = require('../controllers/suporte'); 

router.get('/suporte', SuporteController.listarSuporte); 
router.post('/suporte', SuporteController.cadastrarSuporte); 
router.patch('/suporte/:usu_id', SuporteController.editarSuporte); 
router.delete('/suporte/:usu_id', SuporteController.apagarSuporte); 


module.exports = router;