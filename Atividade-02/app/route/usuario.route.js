const controller = require("../controller/usuario.controller");

module.exports = function(app){
    app.post("/usuario", controller.inserirUsuario);
    app.get("/usuario", controller.listarUsuarios);
    app.get("/usuario/:id", controller.obterUsuario);
    app.get("/usuario/:id/post", controller.obterPostsDoUsuario);
    app.delete("/usuario/:id", controller.deletarUsuario);
}