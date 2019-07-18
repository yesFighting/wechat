<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
        <el-row class="info_row row" :gutter="10">
          <el-col class="wh" :xs="24" :sm="16" :md="12" :lg="12">
           <div class="area">
             <p class="title"><i class="fa fa-edit"></i>修改系统属性信息</p>
                     
            <el-form class="form"  ref="infoForm" label-width="120px">
                    
                <el-form-item label="企业号appid">
                    <el-input  size="mini"  placeholder="企业号appid"></el-input>
                </el-form-item>
                <el-form-item label="企业号secret:" prop="nickname">
                    <el-input  size="mini" placeholder="企业号secret"></el-input>
                </el-form-item>
               
                 <el-form-item label="评论积分:" prop="email">
                    <el-input size="mini" placeholder="评论积分"></el-input>
                </el-form-item>
                <el-form-item label="签到积分:" prop="telphone">
                    <el-input  size="mini" placeholder="签到积分"></el-input>
                </el-form-item>
                 <el-form-item label="自动审核时间(s):" prop="telphone">
                    <el-input  size="mini" placeholder="自动审核时间"></el-input>
                </el-form-item>
                 <el-form-item label="客服电话:" prop="telphone">
                    <el-input  size="mini" placeholder="客服电话"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">确定</el-button>
                    <el-button >重置</el-button>
                </el-form-item>
                
            </el-form>
            
        
          </div>
        </el-col>
      </el-row>
        </div>
    </div>
</template>

<script>

export default {
     data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }}
    },
    methods:{
        save(){
            
        }
    },
    mounted(){
        //  this.$store.dispatch('GetInfo').then(res=>{
        //      console.log(res)
        //  })
        console.log(this.$store)
    }
}
</script>

<style lang="scss" scoped >
   .info_container{
       padding: 20px;
       background: #fff;
       box-sizing: border-box;
       overflow: auto;
    }
     .title{
        text-align:center;
        width:100%;
        height:30px;
        line-height:30px;
        cursor: pointer;
        background-color: #3bc5ff;
        border:1px solid #3bc5ff;
        color: white;
        display: block;
        .fa{
          margin-right:5px;
       }
    }
   .info_row{
       .wh{
           margin-left: 25%
       }
        .area{
           border:1px solid #dfdfdf;
           height:100%;
           font-size:14px;
           padding:10px;
         
           .form{
               width:90%;
               margin-top:20px;
           }
        }
   }
</style>
