module.exports = {
     //baseUrl:'./',
    // outputDir:'dist',
    // assetsDir:'static',  //放置生成的静态资源
    //    dev:{
    //     host:'192.168.252.152'
    //    }
    //代理跨域
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:3000/admin/api',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}