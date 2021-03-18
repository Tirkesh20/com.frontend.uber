const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
    app.use (
        createProxyMiddleware("/register" , {
            target: "http://localhost:8080/",
            changeOrigin:true,
            security:false
        })
    )
}