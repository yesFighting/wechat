const mongoose = require('mongoose');

const schema = new mongoose.Schema({
   type:{type: String},
   keytext:{type: String},
   reply:{type:String},
   icon:{type: String},
   createTime: {
    type: Date,
    default: Date.now
},
updateTime: {
    type: Date,
    default: Date.now
}      
},{timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }})
module.exports = mongoose.model('newsgrod', schema)   //model 自动为你编译模型sss