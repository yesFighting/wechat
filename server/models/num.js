const mongoose = require('mongoose');

const schema = new mongoose.Schema({
   
  num:{type:Number}
    
})
module.exports = mongoose.model('num', schema)   //model 自动为你编译模型sss