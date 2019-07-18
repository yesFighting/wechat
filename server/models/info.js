const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userPermission:{
        menuList:[
            "role",
            "userId",
            "article"       
        ],
        roleId:{type:String},
        nickname:{type:String},
        roleName:{type:String},
        permissionList:[
            "article",
            "article",
            "user"
        ],
        userId:{type:String}
    }
    
},{
    
})
module.exports = mongoose.model('info', schema)   //model 自动为你编译模型sss