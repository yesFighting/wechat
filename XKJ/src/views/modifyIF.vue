<template>
    <div>
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
        <div class="list">
            <ul>
                <li class="white font-size12">
                    <span>姓名：</span>
                    <span><input type="text" v-model="basic2.name" /></span>
                </li>
                <li class="white font-size12">
                    <span>性别：</span>
                    
                    <span>
                        <van-radio-group style="display:flex;height:100%" label-position='center' v-model="basic2.radio">
                        <van-radio name="1" checked-color="#07c160">男</van-radio>
                        <van-radio name="2" checked-color="#07c160">女</van-radio>
                        </van-radio-group>
                    </span>
                </li>
                 <li class="white font-size12">
                    <span>手机号码：</span>
                    <span><input type="text" v-model="basic2.phone" /></span>
                </li>
                 <li class="white font-size12">
                    <span>生日：</span>
                    <span>
                       <input type="date" v-model="basic2.Birthday"/>
                    </span>
                </li>
                 <li class="white font-size12">
                    <span>电子邮箱：</span>
                    <span><input type="text" v-model="basic2.meail" /></span>
                </li>
                  <li class="white font-size12">
                    <span>证件类型：</span>
                    <span @click="bshow()">{{basic2.typeID}}</span>
                </li>
                <li class="white font-size12">
                    <div class="button-item" >
                        <button>确认提交</button>
                    </div>
                   
                </li>
            </ul>

            <!-- start -->
            <div class="popup">
            <van-popup v-model="show" get-container="body" >
                 <span>
                    <van-radio-group :close='de()' label-position='center' v-model="basic2.typeID">
                    <van-radio :name="index" checked-color="#07c160" v-for="(item,index) in basic2.typeName" :key="index" >{{item}}</van-radio>
                    
                    </van-radio-group>
                </span>
            </van-popup>
            </div>
            <!-- end -->
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
         <div style="padding-bottom:4rem"></div>
        <!-- 弹出层 end -->
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            ejectTrue:false,
            show:false,
            
            basic:{
                textName:'邓会东',
                cardH:'123456',
            },
            
            basic2:{
                name:'deng',
                radio:'1',
                phone:123455,
                Birthday:'',
                meail:'123qq.com',
                typeID:null,
                typeName:['身份证','军官证','其他'],

            }
        }
    },
    mounted(){

    },
    methods:{
         ejectClick(i){
            if(i){
                this.ejectTrue = true;
            }else{
                this.ejectTrue = false;
            }
        },
       getContainer() {
         return document.querySelector('body');
        },
        bshow(){
            this.show = true;
        },
        de(){
            
        }
        
    }
}
</script>

<style scoped>
.button-item{
    width: 90%;
    margin: 0 auto;
    padding: .9375rem 0;
}
.button-item button{
    width: 100%;
    padding: .5rem 0;
    color: #fff;
    background: #04cd8a;
    
}
.list .van-radio{
    padding-left: 2.8125rem;
}
 .van-popup{
     width: 11.25rem !important;
     padding: .9375rem;
     font-size: .875rem
}
 .van-popup .van-radio{
    padding-top: .4375rem
}
.list ul li{
    height: 2.5rem;
    width: 100%;
    line-height: 2.5rem;
    display: flex;
    margin: 0 0 2px 0;
}
.list ul li span:nth-child(1){
    flex:1;
    text-align: right;

}
.list ul li span:nth-child(2){
    flex:2;
    text-align: center;
}
.list ul li span input{
    width: 100%;
    text-align: center;
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
    font-size: .625rem;
}
.button-item button {
    padding: 0;
}
</style>
