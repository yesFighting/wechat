import httpRequest from './request.js'

//接口操作
export const checkUser = params => {
    return httpRequest.httpRequest('',params,'post');
}

//登录接口
export const Login = params => {
    return httpRequest.httpRequest('/api/login',params,'post');
}

//登录用户信息
export const getInfo = params =>{
    return httpRequest.httpRequest(`/api/info/list`,'','get');
}

//图片管理新增
export const imgInit = params =>{
    return httpRequest.httpRequest(`/api/img/init`,params,'post');
}
//图片管理列表
export const imgList = params =>{
    return httpRequest.httpRequest(`/api/img/list`,params,'get');
}
//图片管理编辑
export const imgListEdit = params =>{
    return httpRequest.httpRequest(`/api/img/edit/${params._id}`,params,'post');
}
//图片管理删除
export const imgListDelete = params =>{
    return httpRequest.httpRequest(`/api/img/delete/${params._id}`,'','post');
}
//图片管理批量删除
export const imgListDeleteAll = params =>{
    return httpRequest.httpRequest(`/api/img/deleteAll`,params,'post');
}


//回复新增
export const newsInit = params =>{
    return httpRequest.httpRequest(`/api/news/init`,params,'post');
}
//回复列表
export const newsList = params =>{
    return httpRequest.httpRequest(`/api/news/list`,params,'get');
}

//回复列表编辑
export const newsListEdit = params =>{
    return httpRequest.httpRequest(`/api/news/edit/${params.id}`,params,'post');
}
//回复列表删除
export const newsListDelete = params =>{
    return httpRequest.httpRequest(`/api/news/delete/${params}`,'','post');
}