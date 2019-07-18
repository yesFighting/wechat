import httpRequest from './request.js'

//接口操作
export const checkUser = params => {
    return httpRequest.httpRequest('',params,'post');
}

/**
* demo接口
*/
export const demo = params => {
    return httpRequest.httpRequest(`/c/init`,params,'get');
}

export const  coupon = params =>{
    return httpRequest.httpRequest(`/list/coupon`,params,'post');
}
//金额接口
export const  manyList = params =>{
    return httpRequest.httpRequest(`/many/list`,params,'get');
}