<template>
    <div class="home">
       <head-nav></head-nav>
       <div class="left-fixed-right-auto">
           <left-menu></left-menu>
           <div class="content_page" :style="{'left':sidebar.width}" >
               <div class="content">
                   <div class='bread_container' @click="onOffMenu" id="bread_container">
                        <span class="bars"> 
                            <i class="el-icon-s-fold" :class="{isactive:changeBarDirection}" ></i>
                        </span>
                        <el-breadcrumb class="breadcrumb" separator="/">
                            <el-breadcrumb-item v-for="(item,index) in brad" :key="index">{{item}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div style="height:26px"></div>
                    <!-- <bread></bread> -->
                    <router-view></router-view><!--页面渲染入口-->
                </div>
           </div>
       </div>
       <FootNav></FootNav>
    </div>
</template>

<script>
import HeadNav from '../components/layout/headNav'
import FootNav from '../components/layout/footNav'
import LeftMenu from '../components/layout/leftMenu'

import { mapGetters } from 'vuex'
export default {
   name:'Main',
   data(){
       return{
           changeBarDirection:false,
           

       }
   },
   components:{
       HeadNav,
       FootNav,
       LeftMenu
   },
   computed:{
       ...mapGetters([
           'sidebar'
       ]),
       //坐标方法
       brad(){
           let temp=[],temps=[];
           this.$route.matched.filter((item,index,con)=>{
               if(item.meta.title){
                   const title =  item.meta.title;
                    temp.push(title)
               }
           });
           temp.filter((item,index,con)=>{
               if(!temps.includes(item)){
					temps.push(item);
				}
           })
          
           return temps;
       }
   },
    methods:{
        onOffMenu(){
            this.$store.dispatch('setLeftCollapse');  // 折叠菜单
            this.$store.dispatch('handleLeftMenu');  
            this.changeBarDirection = !this.changeBarDirection;
        }
    }
}
</script>

<style lang="scss" scoped>
   .content_page{
        position: absolute;
        top:60px;
        right:0;
        // left:11%;
        z-index: 3;
        background:#F6F7FC;
    }
     .content{
       width:100%;
       height:100%;
    }
    .bread_container{
        position: fixed;
        z-index: 999;
		background-color: #EFF2F7;
        width: 100%;
        height: 28px;
		.bars{
			float: left;
            margin: 4px 10px;
			cursor: pointer;
			.isactive{
				-webkit-transform: rotate(90deg);
				transform: rotate(90deg);
				transition: .38s;
				-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
			}
		}
		.breadcrumb{
			height: 30px;
			line-height: 30px;
			.breadbutton{
				float:left;
				margin:4px 5px 0 0;
				
			}
		}
	}
</style>

