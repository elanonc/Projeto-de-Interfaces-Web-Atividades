const express = require("express");
const routes = require("../app/route/usuarios.route");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    routes(app);
    app.use(express.static("./public"))
    return app;
}