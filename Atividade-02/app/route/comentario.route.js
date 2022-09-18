const controller = require("../controller/comentario.controller");

module.exports = function(app){
    app.get("/comentarios", controller.obterComentarios);
    app.delete("/comentarios/:id", controller.deletarComentario);
    app.post("/comentarios", controller.inserirComentario)
}