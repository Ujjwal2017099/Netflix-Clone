const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : [true , 'Email already present'],
        required : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    sex : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    mylist : {
        type : [String]
    }
})

const User = new mongoose.model('User',userSchema);

module.exports = User;