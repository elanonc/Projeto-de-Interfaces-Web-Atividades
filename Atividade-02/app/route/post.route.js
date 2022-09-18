const controller = require("../controller/post.controller");
const controllerComentarios = require("../controller/comentario.controller")

module.exports = function(app){
    app.get("/post", controller.listarPosts);
    app.get("/post/:id/comentarios", controllerComentarios.obterComentariosDoPost);
    app.get("/post/:id", controller.obterPost);
    app.post("/post", controller.inserirPost);
    app.delete("/post/:id", controller.deletarPost);
}