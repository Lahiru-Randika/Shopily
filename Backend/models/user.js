const mongoose = require ('mongoose');

const customerScheme = mongoose.Schema({
    cusname:{
        type:String,
        required:true
    },
    cusphonenum:{
        type:Number,
        required: true
    },
    cusemail:{
        type: String,
        required:true
    },
    cusaddress:{
        type: String,
        required:true
    },
    cuspassword:{
        type: String,
        required:true
    }
})

customerScheme.virtual('id').get(function(){
    return this._id.toHexString();
})

customerScheme.set('toJSON',{
    virtuals: true,
})


const sellerScheme = mongoose.Schema({
    selname:{
        type:String,
        required:true
    },
    selphonenum:{
        type:Number,
        required: true
    },
    selemail:{
        type: String,
        required:true
    },
    seladdress:{
        type: String,
        required:true
    },
    selshoptype:{
        type: String,
        required:true
    },
    selpassword:{
        type: String,
        required:true
    }
})

sellerScheme.virtual('id').get(function(){
    return this._id.toHexString();
})

sellerScheme.set('toJSON',{
    virtuals: true,
})


const verifymeScheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phonenum:{
        type:Number,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    shoptype:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    otp:{
        type: String,
        required:true
    },
    createdAt:{
        type: Date,
        required:true
    },
    expiresAt:{
        type: Date,
        required:true
    }
})

verifymeScheme.virtual('id').get(function(){
    return this._id.toHexString();
})

verifymeScheme.set('toJSON',{
    virtuals: true,
})


exports.Customer = mongoose.model('Customer',customerScheme);
exports.Seller = mongoose.model('Seller',sellerScheme);
exports.Verifyme = mongoose.model('Verifyme',verifymeScheme);