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
                                    &nbsp;  康币数量
                                </span>
                                <span>
                                    <span class="bule"> 0 </span>个
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>

                <div class="font-size">
                    <van-tabs line-width="9.9375rem" line-height="1px" color="#04cd8a"  title-active-color="#04cd8a" >
                          <van-tab title="康币使用规则">
                              <div class="white font-size pad">
                                    <div>
                                        <p class="bule">如何使用康币:</p>
                                        <p class="text-indent">如何使用康币如何使用康币如何使用康币如何使用康币如何使用康币如何使用康币</p>
                                    </div>
                                     <div type="button" class="white but">前往商场</div>
                                </div>
                               
                          </van-tab>

                          <van-tab title="康币明细"></van-tab>
                    </van-tabs>
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

import '@/assets/css/limitPublic.css'
export default {

}
</script>

<style scoped>

 .content{
     margin-top: 0;
 }
   .bule{
    color: #04c18d;
}
.van-ellipsis{
    border-right: 1px solid #ccc !important;
}
.pad{
    padding: 1rem;
}
.but{
    width: 5rem;
    margin: 2.5rem auto;
    padding: .3125rem .9375rem;
    background: #009900;
    text-align: center;
    color:#fff;
}
.pad>div p:nth-child(1){
    padding: .3125rem 0;
}
.pad>div p:nth-child(2){
    padding: .0625rem 0;
}
.text-indent{
    text-indent:2em
}

.content ul li a{
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 1.6rem
}
</style>
