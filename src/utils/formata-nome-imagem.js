function formataNomeImagem(nome) {
    // Use o método replace() para substituir todos os espaços por hífens
    const nomeFormatado = nome.toLowerCase().replace(/\s/g, '-');
    
    return nomeFormatado;
}

module.exports = {
    formataNomeImagem
}