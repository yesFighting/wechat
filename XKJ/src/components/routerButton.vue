<template>
    <div class="footer">
        <div>
            <router-link to="/core" class="rou">
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
            <router-link to="/mycard" class="rou">
                <img src="@/static/images/icon-w.png" />
                <span style="color:#04cd8a">我的</span> 
            </router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: [],
    methods:{},
    mounted(){
        
    }
}
</script>

<style>

</style>
