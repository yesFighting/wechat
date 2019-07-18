<template>
    <div class="fillcontain">
        <!-- <search-item></search-item> -->
        <div class="table_container">
            <div class="search_container searchArea">
                <el-form class="rflex">
                    <div class="wflex rflex">
                        <el-form-item>
                            <el-select v-model="select" clearable placeholder="话题类型" style="width:120px">
                            <el-option
                            
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        </el-form-item>
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
                    <el-form-item class="btnRight">
                        <el-button type="primary" size ="mini" icon="view" >批量删除</el-button>
                        <!-- <el-button type="success" size ="mini" icon="view">导出Elcel</el-button> -->
                        <el-button type="primary" size ="mini" icon="view">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table
               :height="tableHeight"
                style="width: 100%"
                align='center'
               :data="tableData"
                >
              
            <el-table-column
                type="selection"
                align='center'
                width="40">
            </el-table-column>
              <el-table-column
                prop="id"
                label="评论ID"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="username"
                label="会员昵称"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="addType"
                label="话题"
                align='center'
                sortable>
                <template slot-scope="scope">
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px"></span>
                </template>
            </el-table-column>
            <el-table-column
                prop="incomePayType"
                label="评论内容"
                align='center'
                width="130"
                
                
              >
            </el-table-column>
            <el-table-column
                prop="time"
                label="评论时间"
                align='center'
                width="130"
                sortable> 
               
            </el-table-column>
           <el-table-column
                prop="incomePay"
                label="精彩评论"
                align='center'
                width="160">
                 <template>
                     <el-button 
                        
                        size="mini"
                      
                    >否</el-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="addcard"
                label="获得积分"
                align='center'
                width="160">
            </el-table-column>
             <el-table-column
                prop="updateTime"
                label="审核时间"
                align='center'
                width="160">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="审核"
                align='center'
                width="80">
                <template>
                     <el-button 
                        type="danger" 
                        icon='delete' 
                        size="mini"
                      
                    >审核通过</el-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="operation"
                align='center'
                label="操作"
                width="80">
                <template slot-scope=''>
                    <el-button 
                        type="warning" 
                        icon='edit' 
                        size="mini"
                       
                    >隐藏</el-button>
                   
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
    export default {
        data(){
            const item={
                id:13,
                username:'小康菌',
                addType:'四川地震',
                incomePayType:'今天发生了地震',
                time:'2019.7.15',
                incomePay:'0',
                addcard:2,
                updateTime:'2019.7.17'

            }
            return{
                tableData: Array(10).fill(item),
                value1:'', 
                value2:'', 
                tableHeight:10,
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
                pageTotal:10,
                 options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                select: ''
            }
        },
        components:{
            Paging
        },
        mounted(){
            this.setTableHeight()
            window.onresize=()=>{
                this.setTableHeight()
            }
        },
        methods:{
            setTableHeight(){
                this.$nextTick(()=>{
                    this.tableHeight = document.body.clientHeight - 250;
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


