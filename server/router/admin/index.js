module.exports = app =>{
  const express = require('express')
  const news = require('../../models/news')
  const many = require('../../models/many')
  const nums = require('../../models/num')
  const mitiPage = require('../../models/mitiPage')
  const newsgrod = require('../../models/newgrod.js')
  const info = require('../../models/info.js')
  const mongoosePaginate = require('mongoose-paginate-v2');

  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/adminUser')

  const router = express.Router({
    mergeParams: true
  })
  //回复添加
  router.post('/news/init', async(req, res)=>{
    const newss = await newsgrod.create(req.body);
    res.send(newss)
  })
  //回复列表
  router.get('/news/list', async(req, res)=>{
    const newss = await newsgrod.find().limit(10)
    res.send(newss)
  })
    //回复列表编辑
    router.post('/news/edit/:id', async(req, res)=>{
     
      const newss = await newsgrod.findByIdAndUpdate(req.params.id, req.body);
      res.send(newss)
    })
     //回复列表编辑回显
     router.get('/news/list/:id', async(req, res)=>{
     
      const newss = await newsgrod.findById(req.params.id);
      res.send(newss)
    })
       //回复列表删除
  router.post(`/news/delete/:id`, async (req, res)=>{
     await newsgrod.findByIdAndDelete(req.params.id, req.body)
    
    res.send({
      success: true
    });
  })
    //回复列表pi删除
  router.post(`/img/deleteAll/`, async (req, res)=>{
   
     await mitiPage.deleteMany({_id:[req.params.id]})

    res.send({
      success: true
    });
  })
  //回复列表
  router.post('/news/list',async(req,res)=>{
 
    const model = await news.create(req.body)
    res.send(model)
})
//余额接口
router.get('/c/init', async (req, res) => {
  var muna=1;
  var munaa=1;
  var sum = muna+munaa;
 
  const cats= await news.create({
    many: '10.00',
    num:sum,
    dataMany:[
      {
        many: '6.00',
        num:muna
      },
      {
        many: '4.00',
        num:munaa
      },
    ]
    
  })
  const newsTitles = ["夏日新版本“稷下星之队”即将6月上线", "王者荣耀携手两大博物馆 走进稷下学宫", "王者大陆第一学院【稷下】档案", "跨界合作丨控油神装登场，唤醒无限护肤力量！"];
 const newss = newsTitles.map(title=>{
   return{
     name:cats,
     title:title
   }
 })
  res.send(cats)

})

//优惠券接口
router.post('/list/coupon', async (req, res)=>{
  
  const  coupon = await many.create({
    yesMany:[{state:1,many :50, num:200},{state:1,many :10, num:50,}],
    onMany:[{state:1,many :50, num:200}],
    overdue:[{state:1,many :50, num:200}]
  })
  res.send(coupon)
})

//测试录入数据用
router.get('/many/init', async (req, res)=>{
  await nums.deleteMany({})
  const numList = [1000,1500,2000,2500,3000,5000];
  
  const newmany = numList.map(many =>{
    return {
      num:many
    }
  })
 
  await nums.insertMany(newmany);
  res.send(newmany)
})

//金额接口
router.get('/many/list', async (req, res)=>{
  
  const numlist = await nums.find().limit(100);
  res.send(numlist);
  
})
router.get('/text/list',async(req,res)=>{
 
})

//图片管理新
router.post('/img/init', async (req, res)=>{
  const mitiPages = await mitiPage.create(req.body);
  res.send(mitiPages);
  
})
//图片管理编辑
router.post('/img/edit/:id', async (req, res)=>{
  const mitiPages = await mitiPage.findByIdAndUpdate(req.params.id, req.body)
  res.send(mitiPages);
})
//图片管理查找
router.post('/img/lookup', async (req, res)=>{
  let { type } = req.body
  const mitiPages = await mitiPage.findOne({
    type
  })
  res.send(mitiPages);
})
//图片管理删除
router.post('/img/delete/:id', async (req, res)=>{
  const mitiPages = await mitiPage.findByIdAndDelete(req.params.id, req.body)
  res.send({
    success: true
  });
})
//图片管理pi删除
router.post(`/img/deleteAll`, async (req, res)=>{
  const mitiPages = await mitiPage.findByIdAndDelete(req.params.id, req.body)
  res.send({
    success: true
  });
})
//图片管理列表
const execCallback = function(p,err,data,res){
  if(err){
    res.send(err);
 }else{
   //再次查询，获取总数
   p.find().estimatedDocumentCount((err,result) => {
     if (err) {
       res.send({'status':0,'data':'','message':err,'count':''});  
     } else {
       console.log()
       res.send({'status':1,'data':data,'message':'success','count':result});  
     }
     });
 }
}

router.post('/img/list',  (req, res)=>{
  const pageIndex = parseInt(req.body.page);
  const pageSize = parseInt(req.body.limit);
  console.log(pageIndex,pageSize)
  const m =  mitiPage.find({});
  let p =  mitiPage;
  const start =  (pageIndex-1)*pageSize;
  //暂时没有用到
	if(req.query.where){
		p.find(where);
  }
  m.skip(start); 
	m.limit(pageSize);
	m.sort({'createTime':'desc'}); //排序[asc表示升序，desc表示降序]
	m.exec(function(err,data){
  
		execCallback(p,err,data,res)
	})
})

  //返回测试登录信息
  router.get('/info/list', async(req , res)=>{
    const infos  = await info.create({
      userPermission:{
        menuList:[
            'systemcont',
            'imgAdmin',
            'filterT',
            'publicMenu',
             'addReply',
            'replyList',
            'follList',
            'userList',
            'memberList',
            'commentList',
            'hidderList',
            'CBorderList',
            'COlistStatistics',
            'RAconfig',
            'QRcode',
            'QRcodeList',
            'addStaffCode',
            'staffCodeList',
            'detailsList',
            'storeStatistics',
            'employeeStatistics',
            'administrator',
            'adminstratorChK'
        ],
        roleId:1,
        nickname:'edit',
        roleName:'edit',
        permissionList:[
            'imgAdmin:list',
            'imgAdmin:add',
          
          ],
        userId:10003
    }
    })
    res.send(infos)
  })

  //创建登录用户接口
  router.get('/login/list', async (req, res) => {
   
    const model = await AdminUser.create({
      username:'admin',
      password:'123456'

    })
    res.send(model)
  })
//登录接口
router.post('/login', async(req,res)=>{
  const { username, password } = req.body

  const user = await AdminUser.findOne({ username }).select('+password')
  assert(user, 422, '用户不存在')
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // 3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
})
//上传
const multer = require('multer') 
const upload = multer({ dest: __dirname + '/../../uploads' }) // __dirname 表示当前所在文件夹
router.post('/upload',upload.single('file'), async(req, res)=>{
  const file = req.file
  file.url = `http://localhost:3000/uploads/${file.filename}`
  res.send(file)
})


    app.use('/admin/api',router);
}

