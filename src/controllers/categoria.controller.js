const createError = require('http-errors');
const { validationResult } = require('express-validator');

const categoriaService = require("../services/categoria.service")


const create = async function(req, res, next){
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()});
        }

        const response = await categoriaService.create({
            nome: req.body.nome,
        });
        if(response && response.message){
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error);
    }
}

const findAll = async function(req, res, next){
    try {
        const categorias = await categoriaService.findAll();
        res.send(categorias);
    } catch (error) {
        next(error);
    }
}

const findById = async function(req, res, next){
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()});
        }
        
        const response = await categoriaService.findById(req.params.id);
        if(response && response.message){
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
    
}

const update = async function(req, res, next){
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw createError(422, { errors: errors.array() })
        }
        
        const response = await categoriaService.update({
            nome: req.body.nome
        }, req.params.id);
        if(response && response.message){
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error);
    }
}


const deletar = async function(req, res, next){
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()});
        }
        
        const response = await categoriaService.deletar(req.params.id);
        if(response && response.message){
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
    
}

module.exports  = {
    findAll,
    create,
    findById,
    update,
    deletar,
}