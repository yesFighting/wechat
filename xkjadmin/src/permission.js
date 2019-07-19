import router from './router'
import { getInfo } from '../src/config/api'
 import store from './store'
import { getToken } from '@/config/auth' // 验权(从cookie中获取)
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

const whiteList = ['/login','/404'] // 不重定向白名单

router.beforeEach((to, from ,next) => {
    NProgress.start()
    // if (!to.meta.isPublic && !getToken()) {
    //   return next('/login')
    // }
    if(getToken()){

      if(to.path === '/login'){
        next({path: '/'}) //重定向到首页
        NProgress.done() // 结束Progress

      }else if(!store.getters.role){
        console.log(store.getters.role)
        store.dispatch('GetInfo').then(()=>{
           next({...to})
       
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
      NProgress.done() // 结束Progress
    }
  })

  router.afterEach(() => {
    NProgress.done() // 结束Progress
  })