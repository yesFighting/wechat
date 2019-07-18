<template>
    <div>
        <div id="bac">
            <div class="content">
                <ul class="itme-1 white">
                    <li>
                        <a>
                            <div class="title1"><img src="@/static/images/choose_recharge.png" /></div>
                            <div class="title2">
                                <span>
                                    &nbsp;  余额
                                </span>
                                <span>
                                    <span class="bule"> {{manys.many}} </span>元，共<span class="bule"> {{manys.num}} </span>张卡
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="button-item" >
                   <router-link to="/rushMoney" ><button>充 值</button></router-link>
                </div>
                 <ul class="itme-1 white">
                    <li>
                        <a>
                            <div class="title1"><img src="@/static/images/jymx.png" /></div>
                            <div class="title2">
                                <span style="letter-spacing:1px">
                                    &nbsp;交易明细
                                </span>
                                <span style="font-size:.5625rem;letter-spacing:1px;color:#888;margin-top:5px">
                                    （半年内记录，如需查询全部请前往门店查询）
                                </span>
                            </div>
                        </a>
                    </li>
                    
                </ul>
                <van-tabs v-model="active" line-width="5.9375rem" line-height="2px" color="#04cd8a" title-active-color="#04cd8a" >
                    <van-tab title="全 部">
                        <div style="padding-top:.75rem">
                            <ul class="itme-2">
                                <van-loading v-if="isLoading" size="24px">加载中...</van-loading>
                                <li v-else class="white" style="margin-bottom:1px" v-for="(item,index) in manys.dataMany" :key="index">
                                    <a>
                                        <div class="title1"><img src="@/static/images/choose_recharge.png" /></div>
                                        <div class="title2">
                                            <span>
                                                &nbsp;  您充值了：
                                            </span>
                                            <span>
                                                <span class="bule">{{item.many}}  </span>元，共<span class="bule"> {{item.num}} </span>张卡
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </van-tab>
                    <van-tab title="充 值"><van-loading v-if="isLoading" size="24px">加载中...</van-loading></van-tab>
                    <van-tab title="消 费">消 费</van-tab>
                </van-tabs>
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
import '@/assets/css/limitPublic.css'
import { demo } from '@/config/api.js'
export default {
    data(){
        return{
            active:0,
            isLoading: true,
             manys:{
                name:''
            }
        }
    },
    mounted(){
          demo().then(res=>{
            if(res.status === 200){
                this.isLoading = false;
                this.manys = res.data;
            }
           
        })
    }
}
</script>

<style scoped>
.bule{
    color: #04c18d;
    font-size: .625rem;
}
/*  */

.button-item{
    width: 100%;
    margin: 0 auto;
    padding: .9375rem 0;
}
.button-item button{
    width: 100%;
    padding: .5rem 0;
    color: #fff;
    background: #04cd8a
}
/* con */

.content ul li a{
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 1.6rem
}

</style>
