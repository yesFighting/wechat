<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
            <div class="pad-mar">
               
                     <!-- <el-form-item></el-form-item> -->
                 
              
                     
                    <div class="rflex pad">
                        <div class="w120"><h4>类别名称：</h4></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-radio v-model="tableData.type" label="1">文本</el-radio>
                        <el-radio v-model="tableData.type" label="2">图片</el-radio>
                    </div>
                    <div class="rflex pad">
                        <div class="w120"><h4>默认回复信息：</h4></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-checkbox v-model="checked">备选项</el-checkbox>
                    </div>
                    <div v-show="!checked" class="rflex pad">
                        <div class="w120"><h4>触发关键字：</h4></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-input v-model="tableData.keytext" style="width:220px" />
                    </div>
                    <div  class="rflex pad">
                        <div class="w120"><h4>多图片上传：</h4></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                        <el-upload
                            class="avatar-uploader"
                            :action="'http://localhost:3000/admin/api/upload'"
                           
                            :show-file-list="false"
                            :on-success="afterUpload"
                        >
                        <img v-if="tableData.icon" :src="tableData.icon" class="avatar">
                        <p style="color:red">请上传少于8MB的图片jpg | png | jpeg</p>
                        </el-upload>
                        <el-input style="width:405px" v-if="tableData.icon" v-model="tableData.icon" />
                         
                    </div>
                    <div v-if="tableData.type == 1" class="rflex item-center pad">
                        <h4 class="w120">自动回复消息：</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-input 
                        type="textarea"
                        :rows="10"
                        v-model="tableData.reply">

                        </el-input>
                    </div>
                    <div class="pad margin">
                            <el-button @click="addOrEdit()" type="success">确认</el-button>
                            <el-button>返回</el-button>
                    </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import { newsInit,newsListEdit } from '../../config/api'
export default {
    data(){
        return{
            tableData:{
                type: '1',
                id:''
            },
            url:'',
            
            checked:false,
            textarea:'',
            
        }
    },
    mounted(){
       if(this.$route.query.id){
            this.$http.get(`/api/news/list/${this.$route.query.id}`).then(res=>{
                this.tableData = res.data;
            })
       }
    },
    methods:{
        addOrEdit(){
            //判断新增还是修改
            if(this.$route.query.id){
                this.$set(this.tableData, 'id', this.$route.query.id); //显示赋值
                newsListEdit(this.tableData).then(res=>{
                    if(res.status === 200){
                        this.$message({
                            message:'更新成功',
                            type:'success'
                        })
                         this.$router.push('/news/replyList')
                    }
                })
            }else{
                newsInit(this.tableData).then(res=>{
                    this.$message({
                        message:'新增成功',
                        type: 'success'
                    })
                    this.$router.push('/news/replyList')
                });
            }
            
        },
          afterUpload(res){
              console.log(res)
            this.$set(this.tableData, 'icon', res.url)
            // this.model.icon = res.url
        },
      
       
    }
}
</script>

<style lang="scss" scoped>
.info_container{
    background: #fff;
    .pad-mar{
        padding: 20px 0 0 120px;
    }
    .pad{
        padding: 12px 0;
    }
    @media screen and (max-width: 768px){
    .pad-mar{
        padding: 20px 0 0 20px;
    }
    }

    @media screen and (max-width: 550px){
        .pad-mar{
            padding: 20px 0 0 20px;
        }
    }

    @media screen and (max-width: 320px){
        .pad-mar{
            padding: 20px 0 0 20px;
        }
    }
}
.w120{
    width: 140px;
}
.item-center{
        align-items: center;
        width: 60%;
        padding-bottom: 20px;
    }
    .margin{
        margin-left: 150px
    }
</style>
