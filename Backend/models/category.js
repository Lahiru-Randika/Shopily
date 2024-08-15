const mongoose = require ('mongoose');

const categoryScheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required: true
    },
    color:{
        type: String,
        required:true
    }
})

categoryScheme.virtual('id').get(function(){
    return this._id.toHexString();
})

categoryScheme.set('toJSON',{
    virtuals: true,
})

exports.Category = mongoose.model('Category',categoryScheme);
exports.categoryScheme = categoryScheme;