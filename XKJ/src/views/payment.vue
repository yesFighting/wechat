<template>
    <div>
        <div class="content">
            <input class="inppas" type="text" placeholder="请输入开卡的手机号"/>
             <div class="button-item2" >
                   <button>获取验证码</button>
            </div>
            <input class="inppas" type="text"  placeholder="请输入验证码" />
            <input class="inppas" type="password" placeholder="请输入新的支付密码"/>
            <input class="inppas" type="password" placeholder="请再次输入支付密码"/>
           
            <div class="button-item" >
                   <button>确认提交</button>
            </div>
            <!-- <p style="font-size:.75rem;color:#666">若修改密码出现问题，请联系颐而康客服！</p> -->
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

}
</script>

<style scoped>
.content .inppas{
    width: 90%;
    height: 1.875rem;
    /* border: 1px solid #ccc; */
    margin: .3125rem auto;
    padding-left: 1rem;
    font-size: .75rem;
    border-radius: 3px;
}
.content{
    text-align: center;
}
.button-item,.button-item2{
    width: 90%;
    margin: 0 auto;
    padding: .9375rem 0;
}
.button-item button{
    width: 100%;
    height: 2.5rem;
    color: #fff;
    background: #04cd8a
}
.button-item2 button{
    width: 100%;
    padding: .5rem 0;
   color: #666;
    background: rgba(0,0,0,.1)
}

.content .inppas::-webkit-input-placeholder{
            color:rgba(0,0,0,.3);
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:rgb(0,0,0,.3);
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:rgb(0,0,0,.38);
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:rgb(0,0,0,.3);
        }
</style>
