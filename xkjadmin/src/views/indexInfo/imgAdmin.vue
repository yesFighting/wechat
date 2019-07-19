<template>
    <div class="fillcontain">
        <!-- <search-item></search-item> -->
        <div class="table_container">
            <div class="search_container searchArea">
                <el-form class="rflex">
                    <div class="wflex rflex">
                    <el-form-item label="">
                    <el-input v-model="loopType" style="width:220px"  placeholder="用户名" ></el-input> &nbsp;&nbsp;
                     <el-button @click="lookup()" type="primary" size ="mini" icon="search" > 筛选</el-button>
                    </el-form-item>
                   
                    </div>
                    <el-form-item class="btnRight">
                        <el-button @click="delGroup" type="primary" size ="mini" icon="view" >批量删除</el-button>
                        <!-- <el-button type="success" size ="mini" icon="view">导出Elcel</el-button> -->
                        <el-button v-if="hasPerm('imgAdmin:add')" @click="showAddFundDialog('add')" type="primary" size ="mini" icon="view">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table
             @selection-change="handleSelectionChange"
               :data="tableData"
                style="width: 100%"
                align='center'
                :height="tableHeight"
                >
             
            <el-table-column
                type="selection"
                align='center'
                width="40">
            </el-table-column>
              <el-table-column
               fixed
                prop="id"
                label="编号"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="date"
                label="添加时间"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="type"
                label="图片类型"
                align='center'
                sortable>
                <!-- <template slot-scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px"></span>
                </template> -->
            </el-table-column>
            <el-table-column
                prop="incomePayType"
                label="图片描述"
                align='center'
                width="180"
                
              >
            </el-table-column>
            <el-table-column
                prop="address"
                label="图片路径"
                align='center'
                width="130"
                sortable> 
                <template>  
                    <span style="color:#00d053"></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="operation"
                align='center'
                label="操作"
                width="180">
                <template slot-scope='scope'>
                    <el-button 
                        type="warning" 
                        icon='edit' 
                        size="mini"
                       @click='Edit(scope.row)'
                    >编辑</el-button>
                    <el-button 
                        type="danger" 
                        icon='delete' 
                        size="mini"
                        @click="deletet(scope.row)"
                    >删除</el-button>
                </template>
            </el-table-column>
            </el-table>
            <addFundDialog  v-if="addFundDialog.show" :isShow="addFundDialog.show" :dialogRow="addFundDialog.dialogRow"  @getFundList="imgLists()"  @closeDialog="hideAddFundDialog"></addFundDialog>
             <paging  :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></paging>
        </div>
    </div>
</template>

<script>

    import Paging from '@/components/paging/index'
    import AddFundDialog from './components/imgAdimEdit'

    import { imgList, imgListDelete,imgListDeleteAll} from '../../config/api'
    export default {
        inject: ['reload'],
        data(){
            return{
                loopType:'',
                tableHeight:0,
                idFlag:false,
                isShow:false, // 是否显示modal,默认为false
                editid:'',
                rowIds:[],
                multipleSelection:[],
                sortnum:0,
               addFundDialog:{  
                    show:false,
                    dialogRow:{}
                },
                incomePayData:{
                    pageIndex:1,
                    pageSize:20,
                    name:''
                },
                pageTotal:1,
                tableData: []
            }
        },
        components:{
            Paging,
            AddFundDialog
        },
        mounted(){
            this.setTableHeight();
            //窗口变化时触发
            window.onresize =()=>{
               this.setTableHeight(); 
            };
           this.imgLists()
        //    console.log(this.hasPerm('article:add'))
        },
       
        methods:{
             // 列表数据
            imgLists(){
                 const para = Object.assign({},this.incomePayData);
                imgList(para).then(res=>{
                    this.pageTotal = res.data.count
                    this.tableData = res.data.data;
                    console.log(res.data)
                })
            },
            //查找
            lookup(){
                this.$http.post('/api/img/lookup',{type:this.loopType}).then(res=>{
                    console.log(res)
                })
            },
             // 编辑操作方法
            Edit(row){
				console.log(row)
                this.addFundDialog.dialogRow = row;
                 this.showAddFundDialog();
            },
            //删除方法
            deletet(row){
                console.log(row)
                this.$confirm('确认删除该记录吗?', '提示', {
                        type: 'warning'
                    }).then(()=>{
                    imgListDelete(row).then(res=>{
                        this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                        this.imgLists()
                         })
                    })
            },
            //批量删除
            delGroup(){
              
                this.multipleSelection.forEach((item,index,obj)=>{
                    this.rowIds.push( obj[index]._id);  //拿到所有id
                })
                console.log(toString())
                 this.$confirm('确认批量删除该记录吗?', '提示', {
                        type: 'warning'
                    }).then(()=>{
                         imgListDeleteAll(this.rowIds).then(res=>{
                             console.log(res)
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                            this.imgLists()
                            })
                         })
                alert('点击了批量删除'+JSON.stringify(this.rowIds))
            },
            
            //操作多选
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(val)
            },
                        // 显示弹框
            showAddFundDialog(val){
                this.$store.commit('SET_DIALOG_TITLE', val)
                this.addFundDialog.show = true;
                console.log(this.addFundDialog.show)
            },
            hideAddFundDialog(){
                this.addFundDialog.show = false;
            },
            //分页
            handleCurrentChange(val){
                 this.incomePayData.page = val;
                 this.imgLists()
                 //数据列表
            },
            // 每页显示多少条
            handleSizeChange(val){
                this.incomePayData.limit = val;
                 this.imgLists()
                //数据列表
            },
                //表格底部跟随
             setTableHeight(){
                this.$nextTick(()=>{
                    this.tableHeight = document.body.clientHeight - 250
                })
             },
        }
    }
</script>

<style lang="scss" scoped>
    .el-dialog--small{
       width: 600px !important;
    }
    .pagination{
        text-align: left;
        margin-top: 10px;
    }
       .search_container{
        margin-bottom: 10px;
    }
    
    .searchArea{
        background:rgba(255,255,255,1);
    }
    .el-form-item{
        margin: 0;
        padding: 8px;
    }
    @media screen and (max-width: 768px){
    .rflex{
        display: block;}
    }

    @media screen and (max-width: 550px){
    .rflex{
        display: block;
        }
    }

    @media screen and (max-width: 320px){
        .rflex{
            display: block;
        }
    }
</style>


