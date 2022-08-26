const express = require("express");
const routesUsuarios = require("../app/route/usuarios.route");
const routesPosts = require("../app/route/posts.route");

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    routesUsuarios(app);
    routesPosts(app);
    app.use(express.static("./public"))
    return app;
}