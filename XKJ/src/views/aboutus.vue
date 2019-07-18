<template>
    <div>
        <div>
            <div class="bg-item">
                <!-- 头像 start -->
                <div class="roudius" >
                    <div class="img-itme">
                        <img src="@/static/images/logo.png" />
                    </div>
                </div>
                 <!-- 头像 end -->
            </div>
            <div  class="content">
                <ul v-if="show" class="itme-2 white">
                    <li>
                    <a @click="clickShow(false,true)" >
                        <div class="title1"><img src="@/static/images/password.png" /></div>
                        <div class="title2">
                            <span>
                                &nbsp;  充值说明
                            </span>
                            <span> 
                                <van-icon name="arrow" />
                            </span>
                        </div>
                    </a>
                    </li> 
                    
                    <li>
                    <a>
                        <div class="title1"><img src="@/static/images/jcbding.png" /></div>
                        <div class="title2">
                            <span>
                                &nbsp;  责任客服
                            </span>
                            <span> 
                                <van-icon name="arrow" />
                            </span>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a>
                        <div class="title1"><img src="@/static/images/lxkefu.png" /></div>
                        <div class="title2">
                            <span>
                                &nbsp;  联系电话
                            </span>
                            <span> 
                                <van-icon name="arrow" />
                            </span>
                        </div>
                    </a>
                    </li>
                </ul>
                <div v-else-if="text_show" style="padding:0 .25rem">
                <p class="font-size14 center">充值说明</p><br/>
                <p class="font-size14 padding2">（一）如何查询您的电子卡余额？</p>
                <p style="text-indent:1.75rem;letter-spacing:1px" class="font-size12 colora4">请在颐康到家微信公众号页面点击【我的】-【我的会员卡】-【余额】，查看您的电子卡最新余额。</p>
                 <p class="font-size14 padding2">（二）电子卡如何支付？</p>
                <p style="text-indent:1.75rem;letter-spacing:1px" class="font-size12 colora4">向门店工作人员提供您绑定电子卡的手机号或电子卡卡号进行支付。<br/>
请在颐康到家微信公众号页面点击【我的】-【我的会员卡】-【查看会员二维码】，工作人员将协助您进行扫码支付。</p>
                     <p class="font-size14 padding2">（三）电子卡可以在哪些门店使用？</p>
                <p style="text-indent:1.75rem;letter-spacing:1px" class="font-size12 colora4">颐而康所有门店均支持电子卡支付。<br/>
注：若遇到除以上之外的问题，请及时联系我们的工作人员。</p>
                <p id="bac" class="font-size14 right"><span @click="clickShow(true,false)" class=" fh">返回</span></p>
                <div style="padding-bottom:3rem"></div>
            </div>
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:true,
            text_show:false,
        }
    },
    mounted(){

    },
    methods:{
        clickShow(onoff1,onoff2){
                this.show = onoff1;
                this.text_show = onoff2;
        }
    }

}
</script>

<style scoped>
.fh{
    padding: .1875rem .375rem;
    background: rgba(0,0,0,.1);
}
.bg-item{
    width: 100%;
    height:9rem;
    background-image: url(../static/images/bg_member_center.png);
    background-size:cover;
    padding-top: 1rem;
}
.roudius{
     width: 5rem;
    height:5rem;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
}
.bg-item .img-itme,.eject-size .img-itme{
    width: 4.5rem;
    height:4.5rem;
    position: absolute;
    left:50%;
    top: 50%;
    margin-left: -2.25rem;
    margin-top:-2.25rem;
    border-radius: 50%;
}
.eject-size .roudius{
     top: -2rem;
}
.bg-item .img-itme img,.eject-size .img-itme img{
     border-radius: 50%;
}

.content ul li a{
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 1.6rem
}

</style>
