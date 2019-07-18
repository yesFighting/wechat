import http from '@/http.js'

/**
 * 封装promise
 * @param url 接口地址
 * @param data 参数
 * @param method 请求方式
 */
function httpRequest(url,data={},method){
    
    return new Promise((resolve,reiect)=>{
       
        http({
            url:url,
            method:method,
            headers:{
                'Content-Type':'application/json'
            },
            data:data
        }).then(res=>{
            //成功后回调
            resolve(res)
        }).catch(err=>{
            //失败回调
            reiect(err);
        })
    })
}

export default {
    httpRequest,
}