const Usuario = require("../model/usuario.model");
const Post = require("../model/post.model");

const view_usuario = require("../view/usuario.view");
const view_post = require("../view/post.view");

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;
    let promise = Usuario.create(usuario);
    promise.then(
        function(usuarios){
            res.status(201).json(view_usuario.render(usuarios));
        }
    ).catch(
        function(error){
            res.status(400).json(error);
        }
    )
}

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec();
    promise.then(
        function(usuarios){
            res.status(200).json(view_usuario.renderMany(usuarios));
        }
    ).catch(
        function(error){
            res.status(400).json(error);
        }
       )
}

module.exports.obterUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(
        function(usuario){
            res.status(200).json(view_usuario.render(usuario));
        }
    ).catch(
        function(error){
            res.status(404).json(error);
        }
    )
}

module.exports.obterPostsDoUsuario = function(req, res){
    let id = req.params.id;
    let promise = Post.find({ id_usuario: id }).exec();

    promise.then(
        function(post){
            res.status(200).json(view_post.renderMany(post));
        }
    ).catch(
        function(error){
            res.status(400).json(error);
        }
    )
}

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findByIdAndDelete(id).exec();
    promise.then(
        function(usuarios){
            res.status(200).json(view_usuario.render(usuarios));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}