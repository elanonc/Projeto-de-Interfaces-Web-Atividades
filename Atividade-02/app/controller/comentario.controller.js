const Comentario = require("../model/comentario.model");
const view_comentario = require("../view/comentario.view");

module.exports.inserirComentario = function(req, res){
    let comentario = req.body;
    let promise = Comentario.create(comentario);
    promise.then(
        function(comentario){
            res.status(201).json(view_comentario.render(comentario));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.obterComentarios = function(req, res){
    let promise = Comentario.find().exec();
    
    promise.then(
        function(comentarios){
            res.status(200).json(view_comentario.renderMany(comentarios));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.deletarComentario = function(req, res){
    let id = req.params.id;
    let promise = Comentario.findByIdAndDelete(id).exec();
    promise.then(
        function(comentario){
            res.status(200).json(view_comentario.render(comentario));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}

module.exports.obterComentariosDoPost = function(req, res){
    let id = req.params.id;
    let aaa = Comentario.find({ id_post: id }).exec();
    let promise = Comentario.find({ id_post: id }).exec();

    promise.then(
        function(comentarios){
            res.status(200).json(view_comentario.renderMany(comentarios));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
}