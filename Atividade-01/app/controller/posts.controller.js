let posts = [
    {
        id: 1,
        texto: "que isso",
        likes: 100
    },
    {
        id: 2,
        texto: "Flamengo",
        likes: 87
    },
    {
        id: 3,
        texto: "Star Wars",
        likes: 100
    }
];

module.exports.listarPosts = (req, res) => {
    res.json(posts);
}

module.exports.obterPost = (req, res) => {
    const { id } = req.params;

    let post = posts.find((item) => item.id == id);
    
    post ? res.json(post) : res.status(404).json( { error: "usuário não encontrado"} );
}

module.exports.fazerPosts = (req, res) => {
    posts.push(req.body);
    res.status(200).send(req.body);
}

module.exports.removerPosts = (req, res) => {
    const { id } = req.params;

    let aux = posts.filter((item) => item.id != id);

    posts = aux;

    res.status(200).send(aux);
}