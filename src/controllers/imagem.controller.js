const createError = require('http-errors');
const { validationResult } = require('express-validator');
const categoriaRepository = require('../repositories/categoria.repository');

const imagemService = require("../services/imagem.service");
const { formataNomeImagem } = require('../utils/formata-nome-imagem');


const create = async function(req, res, next){
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()});
        }
        const body = req.body

        categoria = await categoriaRepository.findById(body.catId);
        
        const nomeFormatado = formataNomeImagem(body.nome)
        
        const url = `https://nomadetech.online/wallpapers/imagens/${categoria.nome}/${nomeFormatado}.${body.extensao}`

        const response = await imagemService.create({
            nome: body.nome, 
            catId: body.catId, 
            url: url, 
            extensao: body.extensao,  
            tamanho: body.tamanho, 
            resolucao: body.resolucao, 
            tags: body.tags,
            aprovada: body.aprovada
        });
        if(response && response.message){
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error);
    }
}


const findById = async function(req, res, next){
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()});
        }
        
        const response = await imagemService.findById(req.params.id);
        if(response && response.message){
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
    
}

const findAll = async function(req, res, next){
    const numeroDaPagina = parseInt(req.query.page, 10) || 1;

    try {
        const result = await imagemService.findAll(numeroDaPagina);
        const response = {
            info: {
                count: result.info.totalResultado,
                pages: result.info.totalPages
            },
            imagens: result.imagens
            
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
}

module.exports  = {
    findAll,
    create,
    findById
}