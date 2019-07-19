<template>
    <div class="menu_page el-scrollbar" ref="menu_page" :style="{'width':sidebar.width}">
        <el-menu 
            mode="vertical"
            theme="dark" 
            :collapse="isCollapse"
            :default-openeds="['1','2']"
            :show-timeout="200"
           default-active="$route.path"
            router
            :background-color="menuObj.bgColor"
            :text-color="menuObj.textColor"
            :active-text-color="menuObj.activeTextColor"
            :style="{'width':sidebar.width}">
            <template v-for="(item,index) in permission_routers" v-if="!item.hidden && item.children" >

              <router-link v-if="item.children.length === 1 && !item.children[0].length" :to="item.path+'/'+item.children[0].path" :key="index">
                <el-menu-item :index="item.path+'/'+item.children[0].path" class="class='submenu-title-noDropdown">
                   <i class="el-icon-message"></i>
                  <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
                </el-menu-item>
              </router-link>

              <el-submenu v-else :index="item.name||item.path" :key="item.name">
                <template slot="title">
                   <i class="el-icon-message"></i>
                  <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
                </template>

                <template v-for="(child, index) in item.children" v-if="!child.hidden" >
                  <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="index"></sidebar-item>
                  <router-link  :to="item.path+'/'+child.path" :key="child.name">
                    <el-menu-item :index="item.path+'/'+child.path">
                     
                      <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                    </el-menu-item>
                  </router-link>
                </template>
              </el-submenu>
            </template>
              <!-- :default-active="$route.path" -->
                <!-- <template v-for="(item,index) in permission_routers"> -->
                    <!--表示 有一级菜单-->
                    <!-- <router-link v-if="!item.hidden && item.noDropdown" :to="item.path+'/'+item.children[0].path" :key="index">
                        <el-menu-item class="dropItem" 
                            :index="item.path+'/'+item.children[0].path"
                            >
                            <i v-if="item.meta.icon" :class="'fa fa-margin '+item.meta.icon"></i>
                            <span v-if="item.meta.title" slot="title">{{item.meta.title}}</span> 
                        </el-menu-item>
                    </router-link> -->

                    <!--表示 有二级或者多级菜单 -->
                    <!-- <el-submenu v-if="item.children  && item.children.length >= 1 && !item.hidden && !item.noDropdown"  :index="item.path" :key="index">
                        <template slot="title">
                            <i v-if="item.meta.icon" :class="'fa fa-margin '+item.meta.icon"></i>
                            <span v-if="item.meta.title" slot="title">{{item.meta.title}}</span>
                        </template> -->
                        <!--直接定位到子路由上，子路由也可以实现导航功能-->
                        <!-- <router-link v-for="(citem,cindex) in item.children" :to="item.path+'/'+citem.path"  :key="cindex">
                            <el-menu-item 
                                v-if="citem.meta.routerType != 'topmenu' && citem.meta.title"
                                :index="item.path+'/'+citem.path">
                                <span slot="title">{{citem.meta.title}}</span>
                            </el-menu-item> 
                        </router-link>
                    </el-submenu>
                </template> -->
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>基本信息
          </template>
          <el-menu-item-group>
            <el-menu-item index="/systemcont">系统基本信息</el-menu-item>
            <el-menu-item index="/imgAdmin">图片管理</el-menu-item>
            <el-menu-item index="/filterT">敏感过滤词汇</el-menu-item>
            <el-menu-item index="/publicMenu">公众号菜单</el-menu-item>
          </el-menu-item-group>
         
        </el-submenu>
         <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>微信回复
          </template>
          <el-menu-item-group>
            <el-menu-item index="/news/addReply">添加基本回复</el-menu-item>
            <el-menu-item index="/news/replyList">基本回复列表</el-menu-item>
            <el-menu-item index="/news/follList">关注推送列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>会员列表
          </template>
          <el-menu-item-group>
            <el-menu-item index="/member/userList">用户列表</el-menu-item>
            <el-menu-item index="/member/memberList">会员发布列表</el-menu-item>
            <el-menu-item index="/member/commentList">评论列表</el-menu-item>
            <el-menu-item index="/member/hidderList">隐藏评论列表</el-menu-item>
            <el-menu-item index="/member/CBorderList">余额充值订单列表</el-menu-item>
            <el-menu-item index="/member/COlistStatistics">充值订单列表统计</el-menu-item>
            <el-menu-item index="/member/RAconfig">充值金额参数</el-menu-item>
            <el-menu-item index="/member/QRcode">充值二维码</el-menu-item>
            <el-menu-item index="/member/QRcodeList">充值二维码列表</el-menu-item>
            
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-message"></i>员工二维码
          </template>
          <el-menu-item-group>
            <el-menu-item index="/staffCode/addStaffCode">添加二维码</el-menu-item>
            <el-menu-item index="/staffCode/staffCodeList">二维码列表</el-menu-item>
            <el-menu-item index="/staffCode/detailsList">详情列表</el-menu-item>
            <el-menu-item index="/staffCode/storeStatistics">门店统计列表</el-menu-item>
            <el-menu-item index="/staffCode/employeeStatistics">员工统计列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-message"></i>系统管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/administrator/administrator">管理员列表</el-menu-item>
            
          </el-menu-item-group>
        </el-submenu> -->
        </el-menu>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "left-Menu",
     data(){
        return{
            menuObj:{
            bgColor:'#324057',
            textColor:'#fff',
            activeTextColor:'#ff6428',
            }
        }
    },
    mounted(){
    //   this.setMenuHeight();
    
    },
    computed:{
      ...mapGetters([
        'sidebar',
        'isCollapse',
        'permission_routers'
      ])
    },
    methods: {
        setMenuHeight(){
            this.$nextTick(() => {
                this.$refs.menu_page.style.height =  (document.body.clientHeight - 60)+'px';
            
        })
        }
    }

}
</script>

<style lang="scss" scoped>
  $left-bgColor:rgb(50, 64, 87);  // 左侧菜单背景颜色;
  $icon-link:#FF6C60;

  .menu_page {
      position: fixed;
      top: 60px;
      left: 0;
      background-color: $left-bgColor;
      z-index: 99;
      overflow-y: scroll;
      height: 90vh;
  }
  .fa-margin {
    margin-right: 5px;
  }
  .router-link-active {
    li {
        .el-submenu__title{
            color: con-link !important;
        }
    }
  }
</style>
