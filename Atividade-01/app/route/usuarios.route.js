const controller = require("../controller/usuarios.controller");

module.exports = function(app){
    app.get("/usuarios", controller.obterUsuarios);
    app.get("/usuarios/:id", controller.obterUsuario);
    app.post("/usuarios", controller.cadastrarUsuario);
    app.delete("/usuarios/:id", controller.removerUsuario);
}