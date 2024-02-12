const {Categoria} = require('../database/models');

const create = async function(categoria){
    const categoriaCriado = await Categoria.create(categoria);
    return categoriaCriado;
}

const update = async function(categoria, id){
    await Categoria.update(categoria, {
        where: {id: id}
    });
}


const findAll = async function(){
    const categorias = await Categoria.findAll();
    return categorias;
}

const findById = async function(id){
    const categoria = await Categoria.findByPk(id);
    return categoria;
}

const findOneByWhere = async function(where){
    console.log("where: ", where)
    const categoria = await Categoria.findOne({
        where: where
    });
    return categoria;
}

const deletar = async function(id){
    return await Categoria.destroy({where: {id:id}});
}

module.exports  = {
    findAll,
    create,
    findOneByWhere,
    findById,
    deletar,
    update
}