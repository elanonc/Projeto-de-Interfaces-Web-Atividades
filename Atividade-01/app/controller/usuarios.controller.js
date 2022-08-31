let usuarios = [
    {
        id: 1,
        nome:"Mariana",
        email: "mari@atlantico.com",
        senha: "pordeus"
    },
    {
        id: 2,
        nome: "João",
        email: "joaovilt@vilt.com",
        senha: "£$£$"
    },
    {
        id: 3,
        nome: "odimar",
        email: "parceirOdimar@ufc.com",
        senha: "karen123"
    }
];

module.exports.listarUsuarios = function(req, res){
    res.json(usuarios);
};

module.exports.obterUsuario = function(req, res){
    let { id } = req.params;

    let usuario = usuarios.find(usuario => (usuario.id == id));

    if(usuario){
        return res.json(usuario);
    } else {
        return res.status(404).json( { error: "Usuário não encontrado!!!!"} );
    }
};

module.exports.cadastrarUsuario = function(req, res){
    const { id } = req.body; // apenas para validação

    let usuarioJaExiste = usuarios.some((item) => item.id == id);
    
    if (usuarioJaExiste) {
        return res.status(400).json({ error: "Id do usuário já existe!!"});
    }
    
    usuarios.push(req.body);
    
    res.status(200).send(req.body);
};

module.exports.removerUsuario = function(req, res){
    let { id } = req.params;
    
    let aux = usuarios.filter(item => item.id != id);

    let usuario = usuarios.find(usuario => (usuario.id == id));
    
    if(usuario){
        res.json(usuario);
    } else {
        res.status(404).json( { error: "Usuário não encontrado!!!!"} );
    }

    usuarios = aux;
    
    return res.status(200).send(usuario);
};