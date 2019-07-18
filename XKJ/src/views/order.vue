<template>
   <div>
       <div class="topcontent">
           <div class="topcontent-top">
               <router-link to="" class="rou">到店</router-link>
               <router-link to="" class="rou">上门</router-link>
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
                 <img src="@/static/images/ddanblue.png" />
                <span style="color:#04cd8a">订单</span>
                </router-link>
            </div>
            <div>
                <router-link to="/" class="rou">
                   <img src="@/static/images/wd.png" />
                    <span>我的</span> 
                </router-link>
                
            </div>
        </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scopd>

/*  */

.topcontent .topcontent-top{
 position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 1.8rem;
  display: flex;
 border-bottom: 1px solid rgba(0, 0, 0, 0.1);
 align-items: center;
}
.topcontent .topcontent-top .rou{
    flex: 1;
    font-size: .65rem;
    
}
.topcontent .topcontent-top .rou:nth-child(1){
    border-right: 1px solid rgba(0, 0, 0, 0.2)
}

</style>
