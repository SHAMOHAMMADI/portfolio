const {createProxyMiddleware } = require('create-proxy-middleware')

module.exports = app =>{
    app.use(
        createProxyMiddleware('/endpoint' ,
        {
            target:'http://localhost:3020/Projects',
            changeOrigin:true
        }

        )
    )
}