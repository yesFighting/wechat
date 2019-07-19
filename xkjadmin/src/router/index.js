import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Login.vue";
// const Main = () => import('@/views/Main.vue');
import Main from "@/views/Main.vue";

Vue.use(Router);

import systemcont from "@/views/indexInfo/systemcont.vue";
import imgAdmin from "@/views/indexInfo/imgAdmin.vue";
import filterT from "@/views/indexInfo/filterT.vue";
import publicMenu from "@/views/indexInfo/publicMenu.vue";

import addReply from "@/views/news/addReply.vue";
import replyList from "@/views/news/replyList.vue";
import follList from "@/views/news/follList.vue";

import userList from "@/views/member/userList.vue";
import memberList from "@/views/member/memberList.vue";
import commentList from "@/views/member/commentList.vue";
import hidderList from "@/views/member/hidderList.vue";
import CBorderList from "@/views/member/CBorderList.vue";
import COlistStatistics from "@/views/member/COlistStatistics.vue";
import RAconfig from "@/views/member/RAconfig.vue";
import QRcode from "@/views/member/QRcode.vue";
import QRcodeList from "@/views/member/QRcodeList.vue";

import addStaffCode from "@/views/staffCode/addStaffCode.vue";
import detailsList from "@/views/staffCode/detailsList.vue";
import employeeStatistics from "@/views/staffCode/employeeStatistics.vue";
import staffCodeList from "@/views/staffCode/staffCodeList.vue";
import storeStatistics from "@/views/staffCode/storeStatistics.vue";

import administrator from "@/views/administrator/administrator.vue"
import adminstratorChK from "@/views/administrator/adminstratorChK.vue"
//默认不需要权限的页面
//先写静态实现效果
export const constantRouterMap=[
  {
    path: "/login",
    name: "home",
    component: Home,
    meta: { isPublic: true } 
  },
  {
    path:"/index",
    component:Main,
    meta:{
      title:'首页'
    },
    
    // children:[
      //  {path: 'dashboard', component: systemcont},
      // {
      //   path:'/systemcont', name:'systemcont', component:systemcont, meta:{title:'系统基本信息'}
      // },
      // {
      //   path:'/imgAdmin',name:'imgAdmin',component:imgAdmin, meta:{title:'图片管理'}
      // },
      // {
      //   path:"/filterT", name:"filterT", component:filterT, meta:{title:"敏感过滤词汇"}
      // },
      // {
      //   path:'/publicMenu',name:'publicMenu',component:publicMenu,meta:{title:'公众号菜单'}
      // },
      // //微信回复
      // {
      //   path:'/news/addReply',name:'addReply',component:addReply, meta:{title:'添加基本回复'}
      // },
      // {
      //   path:"/news/replyList", name:"replyList", component:replyList, meta:{title:"基本回复列表"}
      // },
      // {
      //   path:'/news/follList',name:'follList',component:follList,meta:{title:'关注推送列表'}
      // },
      // //会员列表
      // {
      //   path:'/member/userList',name:'userList',component:userList, meta:{title:'用户列表'}
      // },
      // {
      //   path:"/member/memberList", name:"memberList", component:memberList, meta:{title:"会员列表"}
      // },
      // {
      //   path:'/member/commentList',name:'commentList',component:commentList,meta:{title:'评论列表'}
      // },
      // {
      //   path:'/member/hidderList',name:'hidderList',component:hidderList,meta:{title:'隐藏评论列表'}
      // },
      // {
      //   path:"/member/CBorderList", name:"CBorderList", component:CBorderList, meta:{title:"充值余额订单列表"}
      // },
      // {
      //   path:'/member/COlistStatistics',name:'COlistStatistics',component:COlistStatistics,meta:{title:'充值订单列表统计'}
      // },
      // {
      //   path:'/member/RAconfig',name:'RAconfig',component:RAconfig,meta:{title:'充值金额参数'}
      // },
      // {
      //   path:'/member/QRcode',name:'QRcode',component:QRcode,meta:{title:'充值二维码'}
      // },
      // {
      //   path:'/member/QRcodeList',name:'QRcodeList',component:QRcodeList,meta:{title:'充值二维码列表'}
      // },

      // //员工二维码
      // {
      //   path:"/staffCode/addStaffCode", name:"addStaffCode", component:addStaffCode, meta:{title:"添加二维码"}
      // },
      // {
      //   path:'/staffCode/detailsList',name:'detailsList',component:detailsList,meta:{title:'二维码列表'}
      // },
      // {
      //   path:'/staffCode/employeeStatistics',name:'employeeStatistics',component:employeeStatistics,meta:{title:'详情列表'}
      // },
      // {
      //   path:'/staffCode/staffCodeList',name:'staffCodeList',component:staffCodeList,meta:{title:'门店统计列表'}
      // },
      // {
      //   path:'/staffCode/storeStatistics',name:'storeStatistics',component:storeStatistics,meta:{title:'员工统计列表'}
      // },

      // {
      //   path:"/administrator/administrator",name:"administrator",component:administrator,meta:{title:'管理员列表'}, menu: 'role'
      // }
    // ]
    
  }
];

//注册路由
export default new Router({
  //
  routes: constantRouterMap
})

//异步路由（需要权限的页面）
export const asyncRouterMap = [
  {
    path:"/indexInfo",
    name:"indexInfo",
    component:Main,
    meta:{title:'基本信息'},
    children:[
      {
        path:"systemcont",
        name:"systemcont",
        component:systemcont,
        meta:{title:'系统基本信息'},
        menu: "systemcont"
      },
      {
        path:"imgAdmin",
        name:"imgAdmin",
        component:imgAdmin,
        meta:{title:'图片管理'},
        menu: 'imgAdmin'
      },
      {
        path:"filterT",
        name:"filterT",
        component:filterT,
        meta:{title:'敏感过滤词汇'},
        menu: 'filterT'
      },
      {
        path:"publicMenu",
        name:"publicMenu",
        component:publicMenu,
        meta:{title:'公众号菜单'},
        menu: 'publicMenu'
      },

    ]
  },
  {
    path:"/news",
    name:"news",
    component:Main,
    meta:{title:'微信回复'},
    children:[
      {
        path:"addReply",
        name:"addReply",
        component:addReply,
        meta:{title:'添加基本回复'},
        menu: 'addReply'
      },
      {
        path:"replyList",
        name:"replyList",
        component:replyList,
        meta:{title:'基本回复列表'},
        menu: 'replyList'
      },
      {
        path:"follList",
        name:"follList",
        component:follList,
        meta:{title:'关注推送列表'},
        menu: 'follList'
      },
    ]
  },
  {
    path:"/member",
    name:"member",
    component:Main,
    meta:{title:'会员列表'},
    children:[
      {
        path:"userList",
        name:"userList",
        component:userList,
        meta:{title:'会员列表'},
        menu: "userList"
      },
      {
        path:"memberList",
        name:"memberList",
        component:memberList,
        meta:{title:'会员发布列表'},
        menu: 'memberList'
      },
      {
        path:"commentList",
        name:"commentList",
        component:commentList,
        meta:{title:'评论列表'},
        menu: 'commentList'
      },
      {
        path:"hidderList",
        name:"hidderList",
        component:hidderList,
        meta:{title:'隐藏评论列表'},
        menu: 'hidderList'
      },
      {
        path:"CBorderList",
        name:"CBorderList",
        component:CBorderList,
        meta:{title:'余额充值订单列表'},
        menu: ""
      },
      {
        path:"COlistStatistics",
        name:"COlistStatistics",
        component:COlistStatistics,
        meta:{title:'充值订单列表统计'},
        menu: 'COlistStatistics'
      },
      {
        path:"RAconfig",
        name:"RAconfig",
        component:RAconfig,
        meta:{title:'充值金额参数'},
        menu: 'RAconfig'
      },
      {
        path:"QRcode",
        name:"QRcode",
        component:QRcode,
        meta:{title:'充值二维码'},
        menu: 'QRcode'
      },
      {
        path:"QRcodeList",
        name:"QRcodeList",
        component:QRcodeList,
        meta:{title:'充值二维码列表'},
        menu: 'QRcodeList'
      },

    ]
  },
  {
    path:"/staffCode",
    name:"staffCode",
    component:Main,
    meta:{title:'员工二维码'},
    children:[
      {
        path:"addStaffCode",
        name:"addStaffCode",
        component:addStaffCode,
        meta:{title:'添加二维码'},
        menu: "addStaffCode"
      },
      {
        path:"staffCodeList",
        name:"staffCodeList",
        component:staffCodeList,
        meta:{title:'二维码列表'},
        menu: 'staffCodeList'
      },
      {
        path:"detailsList",
        name:"detailsList",
        component:detailsList,
        meta:{title:'详情列表'},
        menu: 'detailsList'
      },
      {
        path:"storeStatistics",
        name:"storeStatistics",
        component:storeStatistics,
        meta:{title:'门店统计列表'},
        menu: 'storeStatistics'
      },
      {
        path:"employeeStatistics",
        name:"employeeStatistics",
        component:employeeStatistics,
        meta:{title:'员工统计列表'},
        menu: "employeeStatistics"
      },
    ]
  },
  {
    path:"/administrator",
    name:"adminr",
    component:Main,
    meta:{title:'系统管理员'},
    children:[
      {
        path:"administrator",
        name:"administrator",
        component:administrator,
        meta:{title:'管理员列表'},
        menu: "administrator"
      },
      {
        path:"adminstratorChK",
        name:"adminstratorChK",
        component:administrator,
        meta:{title:'角色权限'},
        menu: "adminstratorChK"
      }
     
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]