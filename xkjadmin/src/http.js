import http from 'axios'
import Vue from 'vue'
import router from './router'

http.defaults.withCredentials=true   //让每个请求携带cookies

// const http = axios.create({
//     // baseURL: 'http://localhost:3000/admin/api'
//   })
// const baseURL = 'http://localhost:3000/admin/api/'
// http.defaults.baseURL = baseURL;

// 请求拦截（配置发送请求的信息）
http.interceptors.request.use(function(config){
 //将token给到一个前后台约定好的key中，作为请求发送
//  if (localStorage.token) {
//     config.headers.Authorization = 'Bearer ' + localStorage.token
//   }
    return config;
},function(error){
    return Promise.reject(error);
});

// 响应拦截
http.interceptors.response.use(res=>{
    return res;
},err=>{
    return Promise.reject(err)
})

 export default http;