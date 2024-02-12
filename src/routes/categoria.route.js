const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoria.controller');

router.post('/', categoriaController.create);

router.get('/', categoriaController.findAll);

router.get('/geral/:id', categoriaController.findById);

router.put('/:id',  categoriaController.update);

router.delete('/:id', categoriaController.deletar);

module.exports = router;