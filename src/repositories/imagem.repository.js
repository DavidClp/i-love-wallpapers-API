const { Imagem } = require("../database/models");
const categoriaRepository = require('../repositories/categoria.repository');

const create = async function (categoria) {
  const imagemCriada = await Imagem.create(categoria);
  return imagemCriada;
};

const countTotalRecords = async () => {
  const totalRecords = await Imagem.count();
  return totalRecords;
};

const findTotalPages = async (resultadosPorPagina) => {
  const totalResultado = await countTotalRecords();
  const totalPages = Math.ceil(totalResultado / resultadosPorPagina);
  return { totalResultado, totalPages };
};

const findAll = async function (numeroDaPagina) {
  const resultadosPorPagina = 2;
  const offset = (numeroDaPagina - 1) * resultadosPorPagina;

  const imagensResult = await Imagem.findAll({
    limit: resultadosPorPagina,
    offset: offset,
  });

  const info = await findTotalPages(resultadosPorPagina);

  // Mapeia as imagens e aguarda a resolução de todas as promessas
  const imagens = await Promise.all(
    imagensResult.map(async (imagem) => {
      const categoria = await categoriaRepository.findById(imagem.catId);
      return {
          ...imagem.toJSON(), 
          categoria: categoria.nome,
      };
    })
  );
  return { imagens, info };
};

const findById = async function(id){
    const result = await Imagem.findByPk(id);
    return result;
}


module.exports = {
  findAll,
  create,
  findById
};
