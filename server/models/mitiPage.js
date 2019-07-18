const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2')

const schema = new mongoose.Schema({
    type: { type: String },
    address: { type: String },
    incomePayType: { type: String },
},
{
    timetamps:true
}
)
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('mitiPage', schema)   //model 自动为你编译模型sss