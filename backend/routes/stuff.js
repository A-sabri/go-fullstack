const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

//enregistrer un objet
router.post('/', auth, multer, stuffCtrl.createThing);

//modification d'un objet
router.put('/:id', auth, stuffCtrl.modifyThing);

//supression d'un objet
router.delete('/:id', auth, stuffCtrl.deleteThing);

//retourne un objet unique 
router.get('/:id', auth, stuffCtrl.getOneThing);

//retourne tout les objets 
router.get('/', auth, stuffCtrl.getAllThing);

module.exports = router;