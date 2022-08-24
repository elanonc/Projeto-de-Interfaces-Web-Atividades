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
    },
    {
        id: 4,
        nome:"Mariana",
        email: "mari@atlantico.com",
        senha: "pordeus"
    },
    {
        id: 5,
        nome: "João",
        email: "joaovilt@vilt.com",
        senha: "£$£$"
    },
    {
        id: 6,
        nome: "odimar",
        email: "parceirOdimar@ufc.com",
        senha: "karen123"
    }
];

module.exports.obterUsuarios = function(req, res){
    res.json(usuarios);
};

module.exports.obterUsuario = function(req, res){
    let { id } = req.params;

    let usuario = usuarios.find(usuario => (usuario.id == id));

    usuario ? res.json(usuario) : res.status(404).json({ error: "Usuario não encontrado"});
};

module.exports.cadastrarUsuario = function(req, res){
    usuarios.push(req.body);

    res.status(200).send(req.body);
};

module.exports.removerUsuario = function(req, res){
    let { id } = req.params;
    
    let aux = usuarios.filter(x => x.id != id);

    usuarios = aux;
    
    return res.send(usuarios);
};