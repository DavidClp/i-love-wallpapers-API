const express = require('express');
const router = express.Router();

const imagemController = require('../controllers/imagem.controller');

router.post('/', imagemController.create);

router.get('/', imagemController.findAll);

router.get('/:id', imagemController.findById);

module.exports = router;