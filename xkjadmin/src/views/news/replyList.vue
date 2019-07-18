<template>
    <div class="fillcontain">
        <!-- <search-item></search-item> -->
        <div class="table_container">
            <div class="search_container searchArea">
                <el-form class="rflex">
                    <div class="wflex rflex">
                    <el-form-item label="">
                    <el-input style="width:220px"  placeholder="用户名" ></el-input> &nbsp;&nbsp;
                    <el-button type="primary" size ="mini" icon="search" > 筛选</el-button>
                    </el-form-item>
                   
                    </div>
                    <el-form-item class="btnRight">
                        <el-button @click="deteleAll()" type="primary" size ="mini" icon="view" >批量删除</el-button>
                        <!-- <el-button type="success" size ="mini" icon="view">导出Elcel</el-button> -->
                        <el-button @click="$router.push(`/news/addReply`)" type="primary" size ="mini" icon="view">添加</el-button>
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
                prop="_id"
                label="编号"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="type"
                label="回复类型"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="keytext"
                label="关键字"
                align='center'
                sortable>
                <!-- <template slot-scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px"></span>
                </template> -->
            </el-table-column>
            <el-table-column
                prop="reply"
                label="默认回复"
                align='center'
                width="180"
                
              >
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="添加时间"
                align='center'
                width="180"
                sortable> 
                
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
                        @click="$router.push({path:'/news/addReply',query:{id:scope.row._id}})"
                    >编辑</el-button>
                    <el-button 
                        type="danger" 
                        icon='delete' 
                        size="mini"
                        @click="detele(scope.row._id)"
                    >删除</el-button>
                </template>
            </el-table-column>
            </el-table>
            <!-- <pagination :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination> -->
            <paging  :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></paging>
        </div>
    </div>
</template>

<script>
    import Paging from '@/components/paging/index'
    import { newsList,newsListDelete } from '../../config/api'
    export default {
        data(){
            const item = {
                id: 1,
                type: '王小虎',
                address: '上海市',
                date:'2018-01-01'
            };
            return{
                tableData: Array(42).fill(item),
                tableHeight:0,
                multipleSelection:null,
                idFlag:false,
                isShow:false, // 是否显示modal,默认为false
                editid:'',
                rowIds:[],
                sortnum:0,
                tableHeight:0,
               addFundDialog:{  
                    show:false,
                    dialogRow:{}
                },
                incomePayData:{
                    page:1,   //分页
                    limit:20, 
                    name:''
                },
                pageTotal:50,  //总数
            }
        },
        components:{
            Paging
        },
        filters:{
            // format('YYYY-MM-DD')
            format(val,tag){
                if(!val)return;
                val = val.toString()
                return moment(val).format(tag)
            }
        },
        mounted(){
             this.setTableHeight();
             //屏幕发生变化时触发
             window.onresize = () => {
                 this.setTableHeight();
             },
            this.list();
        },
        methods:{
            //分页
            handleCurrentChange(val){
                 this.incomePayData.page = val;
                 //数据列表
            },
            // 每页显示多少条
            handleSizeChange(val){
                this.incomePayData.limit = val;
                //数据列表
            },
                //表格底部跟随
             setTableHeight(){
                this.$nextTick(()=>{
                    this.tableHeight = document.body.clientHeight - 250
                })
             },
             list(){
                newsList().then(res=>{
                  this.tableData = res.data;
                 console.log(this.tableData)
                })
             },
               detele(row){
                   this.$confirm('确认删除该记录吗？','提示',{
                       type:'warngin'
                   }).then(()=>{
                       newsListDelete(row).then(res=>{
                           if(res.status === 200){
                               this.$message({
                                   message:'删除成功',
                                   type:'success'
                               })
                               this.list()
                           }
                       })
                   })
               },
                //操作多选
                handleSelectionChange(val) {
                    this.multipleSelection = val;
                    console.log(val)
                },
               deteleAll(){
                    this.multipleSelection.forEach((item,index,obj)=>{
                        this.rowIds.push( obj[index]._id);  //拿到所有id
                    })
                   this.$confirm('确认批量删除该记录吗？','提示',{
                       type:'warngin'
                   }).then(()=>{
                      this.$http.post(`/api/img/deleteAll`,{ '_id':this.rowIds }).then(res=>{
                          if(res.status === 200){
                               this.$message({
                                   message:'删除成功',
                                   type:'success'
                               })
                               this.list()
                           }
                      })
                   })
               }
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


