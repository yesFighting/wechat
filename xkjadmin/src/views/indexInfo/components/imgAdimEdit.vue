<template>
     <el-dialog 
        :visible.sync="isVisible"
        :title="addFundDialog.title" 
        :close-on-click-modal='false'
        :close-on-press-escape='false'
        :modal-append-to-body="false"
        width=""
        @close="closeDialog">
        <div class="form">
            <el-form 
                ref="form" 
                :model="form"
                :rules="form_rules"
                :label-width="dialog.formLabelWidth"
                style="margin:10px;width:auto;">
                <!-- :label-width="dialog.width"  -->
                <el-form-item prop='type' label="图片类别名称:">
                    <el-input :style="{'width':dialog.inputwidth}" type="text" v-model="form.type"></el-input>
                </el-form-item>
                <el-form-item prop='income'  label="">
                    <div class="parentdiv">
                        <div class="child1"><img src=""/></div>
                        <div class="child2">
                            <el-input v-model="form.incomePayType" type="text"></el-input>
                            <el-input v-model="form.address" type="textarea" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item  class="text_right">
                    <el-button size="small" @click="isVisible = false">取 消</el-button>
                    <el-button size="small" type="primary" @click='onSubmit("form")'>提  交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-dialog>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
 import { imgInit, imgListEdit } from '../../../config/api'
export default {
    name:'addFundDialogs',
    inject: ['reload'],   //注入全局方法
    data(){
        let validateData = (rule, value, callback) => {
            if(value == ''){   
                let text;
               if(rule.field == 'type'){
                   text = 'img类型'
                    callback(new Error(text+'不能为空~'));
               }
            }else{
                    callback();
                }
            }
        return{
            textarea:'',
            isVisible: this.isShow,
            form:{
                type:''
            },
            form_rules: {
                type   : [
                    { required: true, validator:validateData,trigger: 'blur'},
                ],
            },
            //详情弹框信息
            dialog: {
                width:'800px',
                formLabelWidth:'120px',
                 inputwidth:'250px'
            }
        }
    },
     props:{
          isShow:Boolean,
          dialogRow:Object
      },
       computed:{
        ...mapGetters(['addFundDialog']),

      },
      created(){
            if(this.addFundDialog.type === 'edit'){
                this.form = this.dialogRow;       //把props返回的数据传值给弹窗
                // this.form.incomePayType = (this.dialogRow.incomePayType).toString();
                // this.form.pay = -this.dialogRow.pay;
            }else{
                // this.$refs['form'].resetFields()
            }
      },
      methods:{
        closeDialog(){
            this.$emit('closeDialog');  
        },
           //表单提交
        onSubmit(form){
            this.$refs[form].validate((valid) => {
                if (valid) {//表单数据验证完成之后，提交数据;
                    let formData = this[form];
                    const para = Object.assign({}, formData)
                    // edit
                    if(this.addFundDialog.type === 'edit'){
                        imgListEdit(para).then(res => {
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            })
                            this.$refs['form'].resetFields()
                            this.isVisible = false
                            this.$emit('getFundList'); 
                        })
                    }else{
                    imgInit(this.form).then(res=>{
                        console.log(res)
                        this.$message({
                                message:'新增成功',
                                type: 'success'
                            })
                            this.$refs['form'].resetFields()   //表单重置
                            this.isVisible = false
                            this.$emit('getFundList');
                            //  this.reload();
                        })
                    }
                }
            })
        },
      }
}
</script>

<style lang="scss" scoped>
   .parentdiv{
       .child1,.child2{
           display: inline-block ;
       }    
   }
  
</style>
