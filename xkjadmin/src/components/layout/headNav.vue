<template>
    <header class="head-nav rflex " id='header_container'>
        <div class='logo-container rflex'>
            <span class='title'>XJK<i>Admin</i></span>
        </div>
        <div class="right-nav" ref="rightNav">
            <!-- <top-menu></top-menu> -->
            <div></div>
            <div class="userinfo-right rflex">
                <div class="notify-row">
                    <ul class="top-menu">
                        <li class="li-badge">
                                <a href='#' @click="$router.go(0)">
                                    <el-badge class="item one">
                                        刷新
                                    </el-badge>
                                </a>
                            
                        </li>
                        <li class="li-badge">
                            <a href='#'>
                                <el-badge :value="3" class="item">
                                消息
                                </el-badge>
                            </a>
                           
                        </li>
                        <!-- @mousemove="showQq()" @mouseleave="hideQq()" -->
                        <li class="li-badge" >
                            <a>
                               
                            </a>
                            <div class="wechat-area cflex" >
                               
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="userinfo">
                    <!-- <img src="../assets/img/avatar.png" class='avatar' alt=""> -->
                    <div class='welcome'>
                        <p class='name comename'>欢迎</p>
                        <p class='name avatarname'>admin</p>
                    </div>
                    <span class='username'>
                        <el-dropdown
                                trigger="click"
                               >
                            <span class="el-dropdown-link">
                                <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command='info'>修改信息</el-dropdown-item>
                                <el-dropdown-item command='pass'>修改密码</el-dropdown-item>
                                <el-dropdown-item @click.native="remove()"  command='logout'>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                    <i class="fa fa-sign-out logout" ></i>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
     name: 'head-nav',
    data(){
        return{

        }
    },
    methods:{
        remove(){
             this.$store.dispatch('loginOut').then(() => {
                location.reload();
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.logo-container {
         min-width: 180px;
         align-items: center;
         justify-content: center;
         text-transform: uppercase;
         box-sizing: border-box;
         box-shadow:0px 2px 5px 0px rgba(230,224,224,0.5);
        .logo {
            height: 50px;
            width: 50px;
            vertical-align: middle;
            display: inline-block;
        }
        .title{
            font-size: 22px;
            i{
                color:#FF6C60;
            }
        }
    }
    .right-nav{
        background: #fff;
        display: flex;
        flex: 1;
        width:calc(100% - 180px);
        padding-right: 15px;
        justify-content: space-between;
        box-shadow:0px 2px 5px 0px rgba(237,233,233,0.5);
    }
    .fa-user {
        position: relative;
        top: -2px;
        margin-right: 4px;
    }
    .head-nav {
        justify-content: space-between;
        width: 100%;
        height: 60px;
        min-width: 600px;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 100;
        box-sizing: border-box;
        z-index: 5;
        .logout {
            vertical-align: middle;
            cursor: pointer;
        }
    }
    .middle{
       align-items: center;
       border:1px solid;
    }
    .userinfo-right{
        justify-content: flex-end;
        min-width: 330px;
        width:330px;
        margin-right: 20px;
    }
    .userinfo {
        line-height: 60px;
        text-align:right;
    }
    .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }
    .welcome{
        display: inline-block;
        width:auto;
        vertical-align: middle;
        padding: 0 5px;
        .name{
            line-height: 20px;
            text-align: center;
            font-size: 14px;
        }
        .comename{
            font-size: 12px;
        }
        .avatarname{
            color:#a9d86e;
            font-weight:bolder;
        }
    }

    .username {
        cursor: pointer;
        margin-right: 5px;
    }
    .border{
        border:1px solid;
    }
    .notify-row{
        line-height:60px;
        margin-right: 20px;
        margin-top: 5px;
    }
    ul.top-menu > li {
        float: left;
        margin-right: 20px;
        position: relative;
        .wechat-area{
            position: absolute;
            z-index: 8;
            top: 55px;
            left: -30px;
            border: 1px solid #a9d86e;
            border-radius: 4px;
            text-align: center;
            .titles{
                font-size: 14px;
                background: #a9d86e;
                color:#fff;
                width: 100%;
                height: 30px;
                line-height: 30px;
            }
            img{
               width: 100px;
               height: 100px;
            }
        }
    }
    ul.top-menu > li > a {
        color:#3bc5ff;
        font-size: 16px;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        border: 1px solid #f0f0f8 !important;
        padding: 2px 6px 4px 6px;
    }
</style>

