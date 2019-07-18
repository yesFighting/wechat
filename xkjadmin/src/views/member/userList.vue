<template>
    <div class="fillcontain">
        <!-- <search-item></search-item> -->
        <div class="table_container">
            <div class="search_container searchArea">
                <el-form class="rflex">
                    <div class="wflex rflex">
                        <el-form-item>
                            <div class="block">
                                <span class="demonstration font-color">时间：</span>
                                <el-date-picker
                                style="width:120px"
                                v-model="value1"
                                type="date"
                                placeholder="开始时间">
                                </el-date-picker> ~ 
                                 <span class="demonstration"></span>
                                <el-date-picker
                                style="width:120px"
                                v-model="value2"
                                type="date"
                                placeholder="结束时间">
                                </el-date-picker>
                               
                            </div>
                        </el-form-item>
                     
                    <el-form-item label="" class="wflex">
                    <el-input style="width:220px"  placeholder="关键字" ></el-input> &nbsp;&nbsp;
                    <el-button type="primary" size ="mini" icon="search" > 筛选</el-button>
                    </el-form-item>
                   
                    </div>
                    <!-- <el-form-item class="btnRight">
                        <el-button type="primary" size ="mini" icon="view" >批量删除</el-button>
                        <el-button type="success" size ="mini" icon="view">导出Elcel</el-button>
                        <el-button type="primary" size ="mini" icon="view">添加</el-button>
                    </el-form-item> -->
                </el-form>
            </div>
            <el-table
               
                style="width: 100%"
                align='center'
                :data="tableData"
                :height="tableHeight"
                >
              
           
              <el-table-column
                prop="id"
                label="编号"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="namecard"
                label="用户来源"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="username"
                label="用户昵称"
                align='center'
                sortable>
                <template slot-scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px"></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="incomePayType"
                label="会员openid"
                align='center'
                width="130"
                
                
              >
            </el-table-column>
            <el-table-column
                prop="income"
                label="会员卡号"
                align='center'
                width="130"
                sortable> 
                <template>  
                    <span style="color:#00d053"></span>
                </template>
            </el-table-column>
           <el-table-column
                prop="phone"
                label="会员手机号码"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="status"
                label="绑定状态"
                align='center'
                width="160">
                 <template slot-scope="scope">  
                    <span v-if="scope.row.status == 1" style="color:red">未绑定</span>
                     <span v-if="scope.row.status == 0" style="color:#00d053">已绑定</span>
                </template>
            </el-table-column>
             <el-table-column
                prop="createTime"
                label="创建时间"
                align='center'
                width="160">
            </el-table-column>
            <!-- <el-table-column
                prop="operation"
                align='center'
                label="操作"
                width="180">
                <template slot-scope=''>
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
            </el-table-column> -->
            </el-table>
            <!-- <pagination :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination> -->
            <paging  :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></paging>
        </div>
    </div>
</template>

<script>

    import Paging from '@/components/paging/index'
    export default {
        
        data(){
             const item = {
                id: 1,
                namecard: '上海市',
                username: '王小虎',
                incomePayType:'123456',
                income:'123456',
                phone:'15100174327',
                status:'1',
                createTime:'2019.01.02'
            };
            return{
                tableData:  Array(10).fill(item),
                value1:'', 
                value2:'', 
                tableHeight:0,
                idFlag:false,
                isShow:false, // 是否显示资金modal,默认为false
                editid:'',
                rowIds:[],
                sortnum:0,
               addFundDialog:{  
                    show:true,
                    dialogRow:{}
                },
                incomePayData:{
                    page:1,
                    limit:20,
                    name:''
                },
                pageTotal:1,
            }
        },
        components:{
            Paging
        },
        mounted(){
            this.setTableHeight();
            window.onresize=()=>{
                this.setTableHeight()
            }
        },
        methods:{
            //表格底部跟随
            setTableHeight(){
            this.$nextTick(()=>{
                this.tableHeight = document.body.clientHeight - 250
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


