import router from './router'
import { getInfo } from '../src/config/api'
 import store from './store'
import { getToken } from '@/config/auth' // 验权(从cookie中获取)

const whiteList = ['/login','/404'] // 不重定向白名单

router.beforeEach((to, from ,next) => {
  
    // if (!to.meta.isPublic && !getToken()) {
    //   return next('/login')
    // }
    if(getToken()){

      if(to.path === '/login'){
        next({path: '/systemcont'}) //重定向到首页
        
      }else if(!store.getters.role){
        store.dispatch('GetInfo').then(()=>{
        
           next({...to})
        //  store.dispatch('GenerateRoutes', { role }).then(() => { // 根据roles权限生成可访问的路由表
        //     router.addRoutes(store.getters.addRouters) // 动态添加可访问权限路由表
        //     next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        //   })
        })

      }else{
        console.log(store.getters.role)
        next()
      }
      // next({path:'/index'})
    }else if(whiteList.indexOf(to.path) !== -1){
       //如果前往的路径是白名单内的,就可以直接前往
       next()
    }else{
      //如果路径不是白名单内的,而且又没有登录,就跳转登录页面
      next('/login')
    }
  })

  router.afterEach(() => {
  
  })