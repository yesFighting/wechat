
<template>
    <div>
        <!-- <router-view></router-view> -->
         <div id="bac">
        <div>
            <div class="bg-item">
                <!-- 头像 start -->
                <div class="roudius" >
                    <div class="img-itme">
                        <img src="@/static/images/1.jpg" />
                    </div>
                </div>
                 <!-- 头像 end -->
                <div class="text">
                    <p><span>{{basic.textName}}</span></p>
                    <p><span>卡号：</span><i>{{basic.textName}}</i></p>
                    <p>
                        <a @click="ejectClick(true)" >查看会员二维码</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="content">
            <ul class=" itme-1">
                <li>
                   <a>
                   <a class="white">                       
                       <div class="title1"></div>
                       <div class="title2">
                           <span>
                           我的钱包
                           </span>
                           <span>
                               <!-- <span class="bule"> 0.00 </span>元，共<span class="bule"> 1 </span>张 --><van-icon name="arrow" />
                           </span>
                       </div>
                       </a>
                        <div class="d-flex">
                            <router-link to="/money" tag="div" class="white content-title">
                                <div class="title-top">
                                    <p class="font-size14" style="color:#000">余额</p>
                                    <p><img src="@/static/images/choose_recharge.png"/></p>
                                </div>
                                <div class="font-size title-botton" style="color:#a4a4a4">
                                    <span class="font-size14 bule">{{manys.many}}</span> 元 &nbsp;&nbsp;共 <span class="font-size14 bule">{{manys.num}}</span> 张卡
                                </div>
                            </router-link>

                            <router-link to="/healthCurr" tag="div" class="white content-title">
                                <div class="title-top">
                                    <p class="font-size14" style="color:#000">我的康币</p>
                                    <p><img src="@/static/images/y.png"/></p>
                                </div>
                                <div class="font-size title-botton" style="color:#a4a4a4"><span class="font-size14 bule">0</span> 个</div>
                            </router-link>
                       </div>
                   </a>
                </li>
            </ul>
            <ul class="white itme-2">
                <li>
                   <a>
                    <a class="white bor">                       
                        <div class="title1"></div>
                        <div class="title2">
                            <span class="font-size12" style="font-weight:bold;color:060606">
                            我的订单
                            </span>
                            <span>
                                <!-- <span class="bule"> 0.00 </span>元，共<span class="bule"> 1 </span>张 --><van-icon name="arrow" />
                            </span>
                        </div>
                       </a>
                        <div class="d-flex">
                           <div class="white content-title">
                                <div class="title-top">
                                    <div>
                                        <p><img src="@/static/images/dindan.png"/></p>
                                        <p class="font-size12" style="color:#000">我的订单</p>
                                    </div>
                                     <div>
                                        <p><img src="@/static/images/tuichu_03.png"/></p>
                                        <p class="font-size12" style="color:#000">退款单</p>
                                    </div>
                                     <router-link to="/coupon" tag="div">
                                        <p><van-icon size="1.25rem" color="red" name="coupon-o" /></p>
                                        <p class="font-size12" style="color:#000">优惠券</p>
                                    </router-link>
                                    
                                </div>
                               
                            </div>

                        </div>
                   </a>
                </li>
                </ul>
                <ul class="white itme-2">
                <li style="background:#f2f2f4;padding-bottom:5px">
                   <router-link to="/money" tag="a" >
                        <a class="white bor">                       
                            <div class="title1"></div>
                            <div class="title2">
                                <span class="font-size12">
                                全部
                                </span>
                                <span>
                                    <!-- <span class="bule"> 0.00 </span>元，共<span class="bule"> 1 </span>张 --><van-icon name="arrow" />
                                </span>
                            </div>
                        </a>
                        <div class="d-flex">
                           <div class="white content-title">
                                <div class="title-top">
                                    <router-link to="/storeRecharge" tag="div">
                                        <p><img src="@/static/images/member_recharge.png"/></p>
                                        <p class="font-size" style="color:#000">我要充值</p>
                                    </router-link>
                                     <router-link to="/passwordedit" tag="div">
                                        <p><img src="@/static/images/password.png"/></p>
                                        <p class="font-size" style="color:#000">修改密码</p>
                                    </router-link>
                                     <router-link to="/payment" tag="div">
                                        <p><img src="@/static/images/zfpasw.png"/></p>
                                        <p class="font-size" style="color:#000">密码找回</p>
                                    </router-link> 
                                     <router-link to="/unbound" tag="div">
                                        <p><img src="@/static/images/jcbding.png"/></p>
                                        <p class="font-size" style="color:#000">解除绑定</p>
                                    </router-link>
                                      <router-link to="/modifyIF" tag="div">
                                        <p><img src="@/static/images/xgzliao.png"/></p>
                                        <p class="font-size" style="color:#000">修改资料</p>
                                    </router-link>
                                     <router-link to="/aboutus" tag="div" >
                                        <p><img src="@/static/images/gywmen.png"/></p>
                                        <p class="font-size" style="color:#000">关于我们</p>
                                    </router-link>
                                </div>
                               
                            </div>

                       </div>
                  </router-link>
                </li>
                </ul>

                 <ul class="white itme-1">
                    <li style="background:#f2f2f4;padding-bottom:5px">
                    <a>
                        <a class="white bor">                       
                            <div class="title1"></div>
                            <div class="title2">
                                <span class="font-size12">
                                联系客服
                                </span>
                                <span>
                                    <span class="bule"> 400-880-2626 </span>
                                </span>
                            </div>
                        </a>
                        
                    </a>
                    </li>
                </ul>
            
            <div style="padding-bottom:6rem"></div>
        </div>
    </div>
        <div class="footer">
            <div>
                <router-link to="/home" class="rou">
                <img src="@/static/images/icon-s.png" />
                <span>首页</span>
                </router-link>
            </div>
             <div>
                  <router-link to="/order" class="rou">
                 <img src="@/static/images/icon-d.png" />
                <span>订单</span>
                </router-link>
            </div>
            <div>
                <router-link to="/" class="rou">
                   <img src="@/static/images/icon-w.png" />
                    <span style="color:#04cd8a">我的</span> 
                </router-link>
                
            </div>
        </div>
        <!-- 弹出层 start -->
        <div v-if="ejectTrue" class="loading"></div>
        <div @click="ejectClick(false)" v-if="ejectTrue" class="eject">
            <div class="eject-size">
                <div class="roudius" >
                    <div class="img-itme">
                        <img src="@/static/images/1.jpg" />
                    </div>
                </div>
                 <div style="" class="text item-text">
                    <p><span style="color:#fff">{{basic.textName}}</span></p>
                    <p><span style="color:#fff">卡号：</span><i>{{basic.cardH}}</i></p>
                 </div>
                 <div style="background:#fff;height:67%" >
                    <img src='' />
                    
                 </div>
            </div>
        </div>
        <!-- 弹出层 end -->
    </div>
</template>

<script>

import '@/assets/css/limitPublic.css';

import { demo } from '@/config/api.js'
export default {
    name:'myCard',
    data(){
        return{
            ejectTrue:false,
            name:'',
            basic:{
                textName:'邓会东',
                cardH:'123456',
            },
           manys:{
                name:''
            }
        }
    },
    mounted(){
        // this.$http.get('http://localhost:3000/admin/api/c/init').then(res=>{
        //     console.log(res);
        // })
         demo().then(res=>{
            if(res.status === 200){
                this.isLoading = false;
                this.manys = res.data;
                console.log(res)
            }
        })
    },
    methods:{
        ejectClick(i){
            if(i){
                this.ejectTrue = true;
            }else{
                this.ejectTrue = false;
            }
        }
    }
}
</script>

<style scoped>
.itme-2,.itme-1{
    box-shadow:0 2px 0 #f2f2f4
}
.content ul li a.bor{
    border-bottom: 1px solid #f2f2f4;
}
.content{
    padding: .3125rem;
    border-radius: 5px;
}
.content  ul li a{
    padding-left: 0;
    border-bottom: 6px solid #f2f2f4;
}
.content-title .title-top{
    display: flex;
    flex-wrap:wrap;
}
.itme-2 .content-title .title-top>div{
    display: flex;
    flex-direction:column;
    align-items: center;
    width: 20%;
}
.d-flex .content-title .title-top p img{
    width: 1.25rem;
    align-items: center;
}
.d-flex .content-title .title-top p{
    padding: .625rem .625rem 0 .75rem;
}
.itme-2 .d-flex .content-title{
    width: 100%;
}

.itme-2 .d-flex .content-title .title-top p:nth-child(2){
    padding: .3125rem 0 .625rem 0;
}
.itme-1 .d-flex .content-title .title-top p:nth-child(1){
    flex: 1
}
.d-flex{
    display: flex;
    flex-wrap: wrap;
}
.itme-1 .d-flex .content-title{
    width: 47.5%;
    margin-bottom: 6px;
    border-radius: 5px;
    /* box-shadow: 0 0 2px 2px rgba(155,155,155,.1) */
}   
.itme-1 .d-flex .content-title:nth-child(2n){
    margin-left: .8125rem
}
.title-botton{
    padding-left: .75rem;
    padding-bottom: .5rem;
}
.eject-size .item-text{
    margin-top:-4.5rem;height:33%;background:#06b077;padding-top:3.25rem; border-top-left-radius:5px;border-top-right-radius:5px
}
.loading{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
}
.eject-size{
   border-radius: 5px
}
.eject-size{
    width: 15.8125rem;
    height:18.75rem;
    background: #06b077;
    position: absolute;
    left: 50%;
    margin-left: -7.84375rem;
    top: 2.8125rem;
}

/* caidan */
.bg-item{
    width: 100%;
    height:12rem;
    background-image: url(../static/images/bg_member_center.png);
    background-size:cover;
    padding-top: 1rem;
}
.roudius{
     width: 4.5rem;
    height:4.5rem;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
}
.bg-item .img-itme,.eject-size .img-itme{
     width: 3.8rem;
    height:3.8rem;
    position: absolute;
    left:50%;
    top: 50%;
    margin-left: -1.9rem;
    margin-top:-1.9rem;
    border-radius: 50%;
}
.eject-size .roudius{
     top: -2rem;
}
.bg-item .img-itme img,.eject-size .img-itme img{
     border-radius: 50%;
}
.text{
    margin: 0 auto;
    text-align: center;
}
.text>p,.text p a,.bg-item p span,.text>p,.text p i{
     color: #fff !important;
     font-size:0.75rem;
}
.text p i{
    font-size: .625rem;
}
.text p a {
    margin-top: .875rem;
    display: inline-block;
    padding: 0.3125rem 1.25rem !important;
    border:1px solid #fff;
    border-radius: 5px;
    font-size:0.8125rem;
}
.bule{
    color: #04c18d;
    /* font-size: .625rem; */
}
</style>


