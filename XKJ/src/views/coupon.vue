<template>
    <div>
        <div id="bac">
            <van-tabs line-width="5.9375rem" line-height="1px" color="#04cd8a" title-active-color="#04cd8a" >
                 <van-tab title="有效">
                     <div class="youx">
                         <div v-for="(item, index) in coupon.yesMany" :key="item._id" class="white borar">
                             <div class="youx-h youx-flex">
                                <img src="@/static/images/choose_recharge.png"   />
                             </div>
                             <div class="youx-flex2">
                                 <p class="font-size16" style="color:#666">{{item.many}}<span style="font-size: .5625rem;"> 元</span></p>
                                 <p>限<span>{{item.num}}</span> 元使用</p>
                                 <p>{{item.createTime}} - 2019.06.22 00:00</p>
                             </div>
                              <div class="youx-flex">
                                 <button class="flex-color">立即使用</button>
                              </div>
                         </div>

                         <div class="white borar">
                             <div class="youx-h youx-flex">
                                <img src="@/static/images/choose_recharge.png"   />
                             </div>
                             <div class="youx-flex2">
                                 <p class="font-size16" style="color:#666"> 1<span style="font-size: .5625rem;"> 元</span></p>
                                 <p>限10元使用</p>
                                 <p>2019.06.22 00:00 - 2019.06.22 00:00</p>
                             </div>
                             <div class="youx-flex">
                                 <button class="flex-color">立即使用</button>
                            </div>
                         </div>
                     </div>
                 </van-tab>
                 <van-tab title="已使用">
                     <div class="youx">
                         <div class="white borar" style="color:#ccc">
                             <div class="youx-h youx-flex">
                                <img src="@/static/images/choose_recharge.png"   />
                             </div>
                             <div class="youx-flex2">
                                 <p class="font-size16"> 1<span style="font-size: .5625rem;"> 元</span></p>
                                 <p>限10元使用</p>
                                 <p>2019.06.22 00:00 - 2019.06.22 00:00</p>
                             </div>
                             <div class="youx-flex">
                                 <div>
                                     <p class="center padding2" >使用日期</p>
                                     <p class="center">2019.07.01</p>
                                 </div>
                            </div>
                         </div>
                     </div>
                 </van-tab>
                 <van-tab title="已过期">
                     <div class="youx">
                         <div class="white borar"  style="color:#ccc">
                             <div class="youx-h youx-flex">
                                <img src="@/static/images/choose_recharge.png"   />
                             </div>
                             <div class="youx-flex2">
                                 <p class="font-size16"> 1<span style="font-size: .5625rem;"> 元</span></p>
                                 <p>限<span>10</span>元使用</p>
                                 <p>2019.06.22 00:00 - 2019.06.22 00:00</p>
                             </div>
                             <div class="youx-flex">
                                 <span class="bor bor-left"></span>
                                 <span>已过期</span>
                                 <span class="bor bor-right"></span>
                            </div>
                         </div>
                    </div>
                 </van-tab>
            </van-tabs>
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
import { coupon } from '@/config/api.js'
export default {
    data(){
        return{
            coupon:{}
        }
    },
    methods:{

    },
    mounted(){
        coupon().then(res=>{
            this.coupon = res.data;
            console.log(this.coupon)
        })
    }
}
</script>

<style scoped>
.youx-flex .bor{
    display: inline-block;
    border-bottom: 1px solid;
    margin: .25rem;
    width: .3rem;
}

.youx>div{
    margin: .625rem .4375rem 0 .4375rem;
    display: flex;
     justify-content:center;
      align-items:center;
      font-size: .5625rem;
      color:#999;
      
}
.youx-flex{
    flex: 1;
    padding-left: .3125rem
}
.youx-flex2{
    flex: 3;
    padding: .375rem 0;
}
.youx-flex2 p{
    padding-top: .25rem;
}
.youx-h{
    height: 3.125rem;
}
.youx-h img{
    width: 60%;
    padding-top: .3125rem;
    padding-left: .3125rem
}
.flex-color{
    color: #fff;
    background: #04cd8a;
    letter-spacing: .0625rem;
    padding: .125rem .25rem;
    border-radius: 3px;
}
</style>
