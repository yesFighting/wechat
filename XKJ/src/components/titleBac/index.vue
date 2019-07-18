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
                    <p><span>{{name}}</span></p>
                    <p><span>卡号：</span><i>{{card}}</i></p>
                    <p>
                        <a @click="ejectClick(true)" >查看会员二维码</a>
                    </p>
                </div>
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
                    <p><span style="color:#fff">{{name}}</span></p>
                    <p><span style="color:#fff">卡号：</span><i>{{card}}</i></p>
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
export default {
    name:'Header',
    props:{
        name:{
            type:String,
        },
        card:{
            type:String,
        },
        ejectTrue:{
            type:Boolean,
        },
        onOff:{
            type:Function,
            default:function(){}
        }

    },
    data(){
        return{
            
        }
    },
    created(){
        this.onOff(11)
    }

}
</script>

<style scoped>
.bg-item{
    width: 100%;
    height:12rem;
    background-image: url(../../static/images/bg_member_center.png);
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

</style>
