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
    
    if(post){
        return res.json(post)
    } else {
        return res.status(404).json( { error: "Post não encontrado"} );
    }
}

module.exports.fazerPosts = (req, res) => {
    let { id } = req.body; 

    let postJaExiste = posts.some((item) => item.id == id);

    if(postJaExiste) {
        return res.status(400).json( { error: "Id do post já existe"} );
    }

    posts.push(req.body);

    res.status(200).send(req.body);
}

module.exports.removerPosts = (req, res) => {
    const { id } = req.params;

    let aux = posts.filter((item) => item.id != id);

    let post = posts.find((item) => item.id == id);

    if(post){
        res.json(post)
    } else {
        res.status(404).json( { error: "Post não encontrado"} );
    }

    posts = aux;

    return res.status(200).send(post);
}