<template>
    <div class="fillcontain">
        <div class="fillcontainer" ref="fillcontainer">
            <div class="rflex item-center">
                <label class="">敏感过滤词汇</label>
                <el-input 
                type="textarea"
                :rows="14"
                v-model="textarea">

                </el-input>
            </div>
                <el-button type="success">确认</el-button>
                <el-button>重置</el-button>
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
            width: 15%;
        }
    }
    .item-center{
        align-items: center;
        margin: 0 auto;
        width: 60%;
        padding-bottom: 20px;
    }
</style>
