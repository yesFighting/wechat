<template>
    <div>
        <div id="bac">
            <div class="">
                 <ul class="itme-1">
                    <li @click="onCancel(true)">
                        <a>
                            <div></div>
                            <div>
                                <span>
                                   选择门店 :
                                </span>
                                <span class="bule">
                                    &nbsp;&nbsp;{{confirmPositions}}
                                </span>
                                <span style="float:right;padding-right:1.25rem"><van-icon name="arrow-down" /></span>
                            </div>
                        </a>
                        
                    </li>
                </ul>
                 <ul class="itme-2">
                    <li>
                        <a>
                            <div></div>
                            <div style="text-align:center">
                                <span class="spimg">
                                   <img src="@/static/images/choose_recharge.png" />
                                </span>
                                <span class="bule">
                                    &nbsp;&nbsp;选择充值金额
                                </span>
                                <span></span>
                            </div>
                        </a>
                    </li>
                </ul>

                <div class="many-itme" >
                   <button ref="but" v-for="(item,index) in many" :class="{active:colSelected==index}" :key="index" @click="bacColor(index)" >{{item.num}}</button>
                </div>
                <input v-model="inpMany" class="white" type="text" />
                <div class="button-item" >
                   <button>充 值</button>
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

            <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '40%' }"
            >
            <div style="border-bottom:1px solid #eff;height:2.8rem">
                <span @click="onCancel(false)" class="font-size14 bule" style="position:absolute;left:.75rem;top:.75rem;;z-index:999">取消</span>
                <span class="font-size12" style="position:absolute;left:41%;top:.75rem;;z-index:999">充值门店选择</span>
                <span @click="confirm()"  class="font-size14 bule" style="position:absolute;right:.75rem;top:.75rem;z-index:999">确定</span>
            </div>
            <van-picker :columns="columns"  @cancel="onCancel"  @change="onChange" />
            </van-popup>
        </div>
    </div>
</template>

<script>
import { manyList } from '@/config/api.js'

export default {
    data(){
        return{
            show:false,
            many:[],
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            colSelected:null,
            inpMany:null,
            confirmPositions:''
        }
    },
    methods:{
        bacColor(i){
            this.colSelected=i;
            if(this.colSelected==i){
                this.inpMany = this.many[i].num;
            }
        },
        onChange(picker, value, index) {
            console.log(`当前值：${value}, 当前索引：${index}`);
            this.positions = value;
        },
        onCancel(i){
              this.show = i;
        },
        confirm(){
            this.show = false;
            this.confirmPositions =  this.positions;
            console.log(this.confirmPositions,this.positions)
        }
    },
    updated(){
        // manyList().then(res=>{
        //     console.log(res)
        // });
    },
    mounted(){
         manyList().then(res=>{
            this.many = res.data;
        });
    }
}
</script>

<style scoped>
.active{
    color:#04cd8a;
    border:1px solid #04cd8a !important; 
}
.itme-1, .itme-2{
    /* background: #fff; */
    height: 2.5rem;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
}
li{
    background: #fff;
    padding-bottom: 1px;
}
.itme-2{
       padding: 3px 0;
}
.itme-2,.itme-2 li{
    height: 2rem;
}
.itme-1 span{
    line-height: 2.5rem;
    padding-left: .625rem;
    font-size: .875rem
}
.bule{
    color: #04c18d;
    font-size: .725rem;
}
.spimg{
    display: inline-block;
    width: 1.5rem;
    line-height: 1.5rem;
}
.spimg img{
    width: 100%;
    vertical-align:middle;
}
.many-itme{
    padding: .625rem 1.125rem;
}
.many-itme button{
    border:1px solid rgba(0, 0, 0, 0.1);
    padding: .625rem 0;
    width: 4.125rem;
    border-radius: 3px;
    margin: .3125rem .875rem;
    font-size: .75rem;
   
    background: none;
    font-weight: 100;
}
input{
    width: 100%;
    padding: .5rem 0 .5rem 8.125rem;
   height: 2.1875rem;   
    display: inline-block;
}
.button-item{
    width: 100%;
    margin: 0 auto;
    padding: .9375rem 0;
}
.button-item button{
    width: 100%;
    padding: .625rem 0;
    color: #fff;
    background: #04cd8a
}
</style>
