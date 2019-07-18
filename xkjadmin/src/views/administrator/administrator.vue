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
                        <el-button type="primary" size ="mini" icon="view" >批量删除</el-button>
                        <!-- <el-button type="success" size ="mini" icon="view">导出Elcel</el-button> -->
                        <el-button @click="adminRouter" type="primary" size ="mini" icon="view">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table
               
                style="width: 100%"
                align='center'
                >
              
            <el-table-column
                type="selection"
                align='center'
                width="40">
            </el-table-column>
              <el-table-column
                prop="username"
                label="编号"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="用户名"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="addType"
                label="权限"
                align='center'
                >
                <template slot-scope="scope">
                    
                </template>
            </el-table-column>
            <el-table-column
                prop="incomePayType"
                label="最后登录"
                align='center'
                width="130"
                
                
              >
            </el-table-column>
            <el-table-column
                prop="income"
                label="登录IP"
                align='center'
                width="130"
                sortable> 
                
            </el-table-column>
           <el-table-column
                prop="income"
                label="登录次数"
                align='center'
                width="130"
                sortable> 
                
            </el-table-column>
            <el-table-column
                prop="operation"
                align='center'
                label="操作"
                width="180">
                <template slot-scope=''>
                    <el-button 
                        type="warning" 
                        icon='edit' 
                        size="mini"
                       
                    >权限</el-button>
                    <el-button 
                        type="warning" 
                        icon='edit' 
                        size="mini"
                       
                    >编辑</el-button>
                    <el-button 
                        type="danger" 
                        icon='delete' 
                        size="mini"
                      
                    >删除</el-button>
                </template>
            </el-table-column>
            </el-table>
            <!-- <pagination :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination> -->
            <paging  v-if="addFundDialog.show" :isShow="addFundDialog.show" :dialogRow="addFundDialog.dialogRow"  @getFundList="getMoneyList"  @closeDialog="hideAddFundDialog"></paging>
        </div>
    </div>
</template>

<script>

    import Paging from '@/components/paging/index'
    export default {
        data(){
            return{
                tableData: [],
                tableHeight:0,
                idFlag:false,
                isShow:false, // 是否显示资金modal,默认为false
                editid:'',
                rowIds:[],
                sortnum:0,
               addFundDialog:{  
                    show:false,
                    dialogRow:{}
                },
                incomePayData:{
                    page:1,
                    limit:20,
                    name:''
                },
                pageTotal:0,
            }
        },
        components:{
            Paging
        },
        methods:{
            adminRouter(){
                this.$router.push('/adminstratorChK')
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


