const controller = require("../controller/posts.controller");

module.exports = (app) => {
    app.get("/posts", controller.listarPosts);
    app.get("/posts/:id", controller.obterPost);
    app.post("/posts", controller.fazerPosts);
    app.delete("/posts/:id", controller.removerPosts);
};