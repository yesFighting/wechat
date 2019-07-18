<template>
    <div class="fillcontain">
        <div class="fillcontainer" ref="fillcontainer">
            <div class=" item-center">
                <el-row :gutter="10">
                   <el-col :xs="20" :sm="6" :md="6" :lg="6" > <label class="right">二维码名称</label></el-col>
                     <el-col :xs="20" :sm="18" :md="18" :lg="12"  ><el-input style=""></el-input></el-col>
                </el-row>
            </div>
            
             <div class=" item-center">
                <el-row :gutter="10">
                   <el-col :xs="20" :sm="6" :md="6" :lg="6"  > <label class="right">二维码编号</label></el-col>
                     <el-col :xs="20" :sm="18" :md="18" :lg="12" ><el-input style=""></el-input></el-col>
                </el-row>
            </div>
             <div class=" item-center">
                <el-row :gutter="10">
                   <el-col :xs="20" :sm="6" :md="6" :lg="6"  > <label class="right">请选择水印LOGO</label></el-col>
                     <el-col :xs="20" :sm="18" :md="18" :lg="18" ><P style="color:red" class="left">请上传少于8MB的图片jpg|png|jpeg(500x500)</P></el-col>
                </el-row>
            </div>
             <div class="item-center2">
                <el-row :gutter="10">
                   <el-col :xs="24" :sm="6" :md="6" :lg="4"  > <label class="right">说明</label></el-col>
                     <el-col :xs="24" :sm="18" :md="18" :lg="18" >
                         <!-- <vue-editor v-model="model.body" useCustomImageHandler  ></vue-editor> -->
                          <vue-ueditor-wrap @ready="ready" v-model="model.body" :config="myConfig"></vue-ueditor-wrap>
                     </el-col>
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
// import {VueEditor} from 'vue2-editor'   //编辑器插件

export default {
    data(){
        return{
            textarea:'',
            model:{
                body:''
            },
            myConfig: {
            // 编辑器不自动被内容撑高
            autoHeightEnabled: false,
            // 初始容器高度
            initialFrameHeight: 240,
            // 初始容器宽度
            initialFrameWidth: '100%',
            // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
            serverUrl: 'http://35.201.165.105:8000/controller.php',
            // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
            UEDITOR_HOME_URL: './static/UEditor/'
            }
            
        }
    },
    components:{
        // VueEditor
        //  VueUeditorWrap
    },
    methods:{
        ready(){
             console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
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
    .item-center2{
        width: 75%;
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
