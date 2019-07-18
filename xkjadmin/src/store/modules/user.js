
import { Login, getInfo } from '@/config/api'
import { getToken, setToken, removeToken } from '@/config/auth'
 import store from '../../store';
import router from '../../router';

const types ={
    SET_TOKEN:"SET_TOKEN",
    SET_ROLES:"SET_ROLES"
}

const user = {
    state: {
        nickname:'',
        avatar:'',
        token: getToken(),
        role: '',
        menus: [],
        permissions: [],
    },
    getters: {
        token: state => state.token,

        role: state => state.role,
        nickname: state => state.nickname,
        userId: state => state.userId,
        avatar: state => state.avatar,
        menus: state => state.menus,
        permissions: state => state.permissions,
      
    },
    mutations:{
        [types.SET_TOKEN](state,token){
            state.token = token;
        },
        SET_ROLES:(state,userInfo)=>{
            //state.roles = userInfo;
            state.nickname = userInfo.nickname;
            state.userId = userInfo.userId;
            state.role = userInfo.roleName;
            state.menus = userInfo.menuList;
            state.permissions = userInfo.permissionList;
        }
    },
    actions: {
        //登录
        forlogin({ commit } , userinfo){
            return new Promise((resolve, reject) => {
                Login(userinfo).then(res=>{
                 
                    let token = res.data.token;
                    setToken(token);
                    commit(types.SET_TOKEN,token);
                    resolve()
                    
                }).catch(err=>{
                    console.log(err);
                    reject(err)
                })

            })
        },

        // 根据token获取用户信息
        GetInfo({ commit, state}){
            // return new Promise((resolve, reject)=>{
            //     getInfo().then(response => {
            //         // console.log(response)
            //         //obj
            //         // if(data.userPermission && data.userPermission.length > 0){ //验证返回的是否是一个空数组
            //             commit('SET_ROLES' , response.data.userPermission.menuList)  // []
            //              //cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
            //             //  setToken();
            //             let data = response.data 
            //             store.dispatch('GenerateRoutes',data.userPermission).then(()=>{
            //                   //生成该用户的新路由json操作完毕之后,调用vue-router的动态新增路由方法,将新路由添加
            //                   router.addRoutes(store.getters.addRouters)
            //             })
            //             resolve(data)
            //        // }
            //     }).catch(err=>{
            //         reject(err)
            //     })
            // })

            return new Promise((resolve, reject) => {
                getInfo().then(response => {
                  //储存用户信息
                  commit('SET_ROLES', response.data.userPermission);
                  //cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
                  setToken();
                  //生成路由
                  let userPermission =response.data.userPermission ;
                  store.dispatch('GenerateRoutes', userPermission).then(() => {
                    //生成该用户的新路由json操作完毕之后,调用vue-router的动态新增路由方法,将新路由添加
                    router.addRoutes(store.getters.addRouters)
                  })
                  resolve(response.data)
                }).catch(error => {
                  reject(error)
                })
              })
        },
        //退出
        loginOut({ commit }){
            return new Promise((resolve, reject) => {
                console.log()
                commit(types.SET_TOKEN,'');
                removeToken();
                resolve()
            })
        }
    },
    

}
export default user;