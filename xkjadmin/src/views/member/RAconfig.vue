<template>
    <div class="fillcontain">
        <div class="fillcontainer" ref="fillcontainer">
            <div class=" item-center">
                <el-row :gutter="10">
                   <el-col :xs="24" :sm="6" :md="6" :lg="6" > <label class="right">金额参数：</label></el-col>
                     <el-col :xs="24" :sm="18" :md="18" :lg="18"  ><el-input style=""></el-input></el-col>
                </el-row>
                <p style="">(*)金额以逗号隔开,参数以6组参数组成</p>
            </div>
            
             <div class=" item-center">
                <el-row :gutter="10">
                   <el-col :xs="24" :sm="6" :md="6" :lg="6"  > <label class="right">最少金额：</label></el-col>
                     <el-col :xs="24" :sm="18" :md="18" :lg="18" ><el-input style=""></el-input></el-col>
                </el-row>
            </div>
            <div class=" item-center">
                <div class="right">
                 <el-button type="success">确认</el-button>
                 <el-button>重置</el-button>
                </div>
            </div>
               
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            textarea:''
        }
    }
}
</script>

<style lang="scss" scoped>
    .fillcontainer{
        label{
            font-weight: bold;
            width: 120px;
        }
    }
    .item-center{
        width: 45%;
        padding-bottom: 20px;
        margin-left: 55px;
    }
    @media screen and (max-width: 768px){}
    
    @media screen and (max-width: 550px){
    .item-center{
        width: 100%;
        
    }
    }

    @media screen and (max-width: 320px){
         .item-center{
        width: 100%;
       
    }
    }
</style>
