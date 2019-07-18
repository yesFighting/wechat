<template>
    <div class="fillcontain font-color em-size14">
        <div class="title">
            <p>
                <span>APPID : </span><span></span>
            </p>
            <p>
                <span>SECRET : </span><span></span>
            </p>
            
        </div>
        <div class="text">
            <p>说明</p>
            <p>1、自定义菜单最多包括3个一级菜单，每个一级菜单最多包含5个二级菜单。</p>
            <p>2、一级菜单最多4个汉字，二级菜单最多7个汉字，多出来的部分将会以“...”代替。</p>
            <p>3、创建自定义菜单后，由于微信客户端缓存，需要24小时微信客户端才会展现出来。测试时可以尝试取消关注公众账号后再次关注，则可以看到创建后的效果。</p>
        </div>
        <div class="lable">
            <!-- <div class="lable-border">
                <div class="rflex he" style="background:#efefef">
                    <div class="w1">菜单列表 <el-button size="mini">添加</el-button></div>
                    <div class="w2">绑定功能</div>
                </div>
                <div  class="rflex ">
                    <div style="border-right:1px solid #777">
                        <label><input class="inp"/><el-button size="mini" icon="el-icon-plus"></el-button></label>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                 <div  class="rflex  border">
                    <div >预约到店</div>
                    <div></div>
                    <div></div>
                </div>
                 <div  class="rflex e">
                    <div>预约到店</div>
                    <div></div>
                    <div></div>
                </div>
                 <div  class="rflex ">
                    <div>预约到店</div>
                    <div></div>
                    <div></div>
                </div>
                 <div  class="rflex ">
                    <div>预约到店</div>
                    <div></div>
                    <div></div>
                </div>
                 <div  class="rflex ">
                    <div>预约到店</div>
                    <div></div>
                    <div></div>
                </div>
                 <div  class="rflex ">
                    <div>预约到店</div>
                    <div></div>
                    <div></div>
                </div>
            </div> -->
            <table id="border" border="1" style="color:#333;border:1px solid #aaa;border-top:1px solid #eee;border-collapse:collapse " border-collapse=collaps>
                <colgroup>
                    <col width="30%"/><col width="55%"/><col width="15%"/>
                </colgroup>
                <tr style="background:#80bdcb">
                    <td class="he">
                        <div >菜单列表 <el-button size="mini">添加</el-button></div>
                    </td>
                    <td class="he">绑定功能</td>
                    <td class="he"></td>
                </tr>
                 <tr class="">
                    <td class=" he">
                         <label><input style="width:45%;padding:3px" class="inp"/><el-button @click="childitem(1)" size="mini" icon="el-icon-plus"></el-button></label>
                    </td>
                    <td class=" he">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>

                 <!--child start -->
                    <tr class="he" v-for="(item,index) in childitems.parent1" :key="index">
                    <td class="he td-p">
                        <label style="color:#ccc">|—</label>&nbsp;
                         <input style="width:45%;padding:3px" class="inp"/>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button @click="childitems.parent1.splice(index,1)" type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
                <!-- end -->
                <tr class="">
                    <td class=" he">
                         <label><input style="width:45%;padding:3px" class="inp"/><el-button @click="childitem(2)" size="mini" icon="el-icon-plus"></el-button></label>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
                <!--child start -->
                    <tr class="he" v-for="(item,index) in childitems.parent2" :key="index">
                    <td class="he td-p">
                        <label style="color:#ccc">|—</label>&nbsp;
                         <input style="width:45%;padding:3px" class="inp"/>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
                <!-- end -->
                <tr class="he">
                    <td class="he ">
                         <label><input style="width:45%;padding:3px" class="inp"/><el-button @click="childitem(3)" size="mini" icon="el-icon-plus"></el-button></label>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
                
                 <!--child start -->
                    <tr class="he" v-for="(item,index) in childitems.parent3" :key="index">
                    <td class="he td-p">
                        <label style="color:#ccc">|—</label>&nbsp;
                         <input style="width:45%;padding:3px" class="inp"/>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
                <!-- end -->
                <tr class="he">
                    <td class="he td-p">
                        <label style="color:#ccc">|—</label>&nbsp;
                         <input style="width:45%;padding:3px" class="inp"/>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
               <tr class="he">
                    <td class="he td-p">
                        <label style="color:#ccc">|—</label>&nbsp;
                         <input style="width:45%;padding:3px" class="inp"/>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
                <tr class="he">
                    <td class="he td-p">
                        <label style="color:#ccc">|—</label>&nbsp;
                         <input style="width:45%;padding:3px" class="inp"/>
                    </td>
                    <td class="he ">
                        <label>类型：</label>
                        <el-select style="width:25%" placeholder="请选择"></el-select>&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>值：</label>
                        <input class="inp"/>

                    </td>
                    <td class="he">
                        <el-button type="danger" size="mini">删除</el-button>
                    </td>
                </tr>
                
            </table>
            <el-button @click="save()" style="margin-top:5px;margin-bottom:35px" class="right" type="primary">保存并生效</el-button>
        </div>
    </div>
 
</template>

<script>
export default {
    data(){
        return{
            childitems:{
                parent1:[],
                parent2:[],
                parent3:[],
            },
            item:1,
           
        }
    },watch(){},
    mounted(){},
    methods:{
        save(){
            alert('您点击了保存')
        },
        childitem(num){
            if(num === 1){
                if(this.childitems.parent1.length >= 5){
                    this.meesalert();
                    return;
                }
                this.childitems.parent1.push(this.item);
                
            }else if(num === 2){
                 if(this.childitems.parent2.length >= 5){
                    this.meesalert();
                    return;
                }
                this.childitems.parent2.push(this.item);
            }else{
                 if(this.childitems.parent1.length3 >= 5){
                    this.meesalert();
                    return;
                }
                this.childitems.parent3.push(this.item);
            }
        },
        meesalert(){
            this.$message({
                message: '每一个一级菜单最多包含5个二级菜单',
                type: 'warning'
            });
        }
    },
    

}
</script>

<style lang="scss" scoped>
#border{
    border:none
}

.title{
    margin: 0 15px 5px 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #777;

}
.title{
    p{
        padding: 8px;
    }
}
.text{
    margin: 12px 15px 5px 15px;
    padding-bottom: 5px;
}
.text{
 p{
        padding: 6px;
    }
}
.lable{
    width: 60%;
    margin: 0 auto;
}
@media screen and (max-width: 768px){
    .lable{
    width: 100%;
    
    }
}

@media screen and (max-width: 550px){
   .lable{
    width: 100%;
    
    }
}

@media screen and (max-width: 320px){
 .lable{
    width: 100%;
    }
}
.lable{
    .lable-border{
        border: 1px solid rgba(150, 150, 150, .4);
       
    }
}
.w1{
    flex: 1;
}
.w2{
    flex: 3;
}
.he{
    padding:8px;
}
.inp{
    width: 40%;
    margin:0 3px;
    padding:3px
}
.lf{
border-left:1px solid #AAA; 
}
.bo{
border-bottom:1px solid #AAA; 
}
.ri{
border-right:1px solid #AAA; 
}
.td-p{
    padding-left:40px
}

</style>
