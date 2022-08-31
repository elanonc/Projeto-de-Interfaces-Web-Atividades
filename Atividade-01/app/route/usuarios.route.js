const controller = require("../controller/usuarios.controller");

module.exports = function(app){
    app.get("/usuarios", controller.listarUsuarios);
    app.get("/usuarios/:id", controller.obterUsuario);
    app.post("/usuarios", controller.cadastrarUsuario);
    app.delete("/usuarios/:id", controller.removerUsuario);
}