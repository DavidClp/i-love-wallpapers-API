const categoriaRepository = require('../repositories/categoria.repository');

const create = async function(categoria){
    const categoriaCriado = await categoriaRepository.create(categoria);
    return categoriaCriado;
}

const findAll = async function(){
    const response = await categoriaRepository.findAll();
    return response;
}

const findById = async function(id){
    const categoria = await categoriaRepository.findById(id);

    if(!categoria){
        return createError(404, "Categoria não encontrado")
    }
    return categoria;
}

const update =  async function(categoria, id){
    const thereIsCategoria = await categoriaRepository.findById(id)
    if(!thereIsCategoria){
        return createError(404, 'Categoria não existe');
    }

    await categoriaRepository.update(categoria, id)
}


const deletar = async function(id){
    const categoria = await categoriaRepository.findById(id);

    if(!categoria){
        return createError(404, "Categoria não encontrado")
    }
    await categoriaRepository.deletar(id);
    return categoria;
}

module.exports  = {
    findAll,
    create,
    findById,
    update,
    deletar
}