const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
    app.use (
        createProxyMiddleware("/register" , {
            target: "http://localhost:8080/",
            changeOrigin:true,
            security:false
        })
    )

    app.use (
        createProxyMiddleware("/login" , {
            target: "http://localhost:8080/",
            changeOrigin:true,
            security:false
        })
    )
    app.use (
        createProxyMiddleware("/order/create" , {
            target: "http://localhost:8080/",
            changeOrigin:true,
            security:false
        })
    )
    app.use (
        createProxyMiddleware("/location/create" , {
            target: "http://localhost:8080/",
            changeOrigin:true,
            security:false
        })
    )


}
