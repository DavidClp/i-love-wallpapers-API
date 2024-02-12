const imagemRepository = require('../repositories/imagem.repository');

const create = async function(imagem){
    const imagemCriado = await imagemRepository.create(imagem);
    return imagemCriado;
}


const findById = async function(id){
    const result = await imagemRepository.findById(id);

    if(!result){
        return createError(404, "Imagem não encontrado")
    }
    return result;
}

const findAll = async function(numeroDaPagina){
    const result = await imagemRepository.findAll(numeroDaPagina);
    return result;
}

module.exports  = {
    findAll,
    create,
    findById
}