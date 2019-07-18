const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    many :{type: String},
    num:{type: Number},
    dataMany:[
        {
            many :{type: String},
            num:{type: Number},
            // created_time: {
            //     type: String,
            //     default: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
            //   },
        }
    ]
    
})
module.exports = mongoose.model('news', schema)   //model 自动为你编译模型sss