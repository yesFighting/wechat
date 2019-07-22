# wechat

# 目前就是一个微信公众号的一个后台管理

## 用了node.js +vue + elementUI模板进行开发

### 主要是讲权限方面进行工作目前不是很完善，对node知识点也是刚刚学不久

启动方式 ： serve

#### router.get('/info/list', async(req , res)=>{
   #### const infos  = await info.create({
     #### userPermission:{
     #### menuList:[
        ####    'systemcont',
           #### 'imgAdmin',
           #### 'filterT',
           #### 'publicMenu',
            #### 'addReply',
             #### roleId:1,
       #### nickname:'edit',
       #### roleName:'edit',
      ####  permissionList:[
        ####    'imgAdmin:list',
         ####   'imgAdmin:add',
          
          ],
        userId:10003
    }
    })
    res.send(infos)
  })
  上面是由node返回给前端的登录信息的json数据的一个格式，menuList代表用户拥有的路由权限权限，根据里面的字段和router里面的menu进行匹配。
  permissionList呢是一个数据权限，判断是否拥有这个操作。
  
  具体代码和注释我都写的很详细了，大家可以自己看。还有大家如果需要修改权限的话直接进入node的路由里面自行修改参数
