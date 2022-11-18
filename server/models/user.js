const mongoose = require('mongoose');

const {Schema}=mongoose

const userSchema = new Schema({
    Sname:{
        type:String,
        required:true
    },
    Aname:{
        type:String,
        required:true
    },
    cpy:{
        type:String,
        required:true
    },
   isbn:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    pub:{
        type:String,
        required:true
    },
    joinedOn:{
        type:Date,
        default:Date.now,
    }
    
    
});
module.exports = mongoose.model("User",userSchema);