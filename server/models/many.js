const mongoose = require('mongoose');

const schema = new mongoose.Schema({
   yesMany:[{
    state:{type: Number},   //状态
    many :{type: Number},   //金钱
    num:{type: Number},  
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    }   //额度
   }],
   onMany:[{
    state:{type: Number},   //状态
    many :{type: Number},   //金钱
    num:{type: Number},     //额度
   }],
   overdue:[{
    state:{type: Number},   //状态
    many :{type: Number},   //金钱
    num:{type: Number},     //额度
   }]
    
},{
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
})
module.exports = mongoose.model('many', schema)   //model 自动为你编译模型sss