function mountRouter(app) {
    app.get("/", (req, res) => res.send("Hello world"))
}

module.exports = {mountRouter}
