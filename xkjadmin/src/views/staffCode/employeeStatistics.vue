<template>
    <div class="fillcontain">
        <!-- <search-item></search-item> -->
        <div class="table_container">
            <div class="search_container searchArea">
                <el-form class="rflex">
                    <div class="wflex rflex">
                        <el-form-item>
                            <el-select v-model="select" clearable placeholder="充值门店" style="width:180px">
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
                                style="width:180px"
                                v-model="value1"
                                type="datetime"
                                placeholder="选择开始日期时间">
                                </el-date-picker> ~ 
                                 <span class="demonstration"></span>
                                <el-date-picker
                                style="width:180px"
                                v-model="value2"
                                type="datetime"
                                placeholder="结束选择开始日期时间">
                                </el-date-picker>
                               
                            </div>
                        </el-form-item>
                     
                    <el-form-item label="" class="wflex">
                    <!-- <el-input style="width:220px"  placeholder="关键字" ></el-input> &nbsp;&nbsp; -->
                    <el-button type="primary" size ="mini" icon="search" > 筛选</el-button>
                    <el-button type="success" size ="mini" icon="el-icon-download">导出</el-button>
                    </el-form-item>
                   
                    </div>
                   
                </el-form>
            </div>
            <el-table
               
                style="width: 100%"
                align='center'
                >
             
              <el-table-column
                prop="username"
                label="门店编号"
                align='center'
               >
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="门店名称"
                align='center'
                >
            </el-table-column>
            <el-table-column
                prop="addType"
                label="员工编号"
                align='center'
                sortable>
                
            </el-table-column>
            <el-table-column
                prop="incomePayType"
                label="充值次数"
                align='center'
                
              >
            </el-table-column>
             <el-table-column
                prop="incomePayType"
                label="金额"
                align='center'
                
              >
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
                value1:'', 
                value2:'', 
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


