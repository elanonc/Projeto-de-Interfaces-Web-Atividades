function render (usuario){
    return {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email
    }
}

function renderSenha (usuario){
    return {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha
    }
}

function renderMany(usuarios){
    return usuarios.map(render);
}

module.exports.render = render;
module.exports.renderSenha = renderSenha;
module.exports.renderMany = renderMany;