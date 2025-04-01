const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://bijjahimanshu05:Explore-MongoDB@cluster0.g0j9e.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    userName : String,
    password : String,
    firstName : String,
    lastName : String
});

const userSchem = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLeangth : 3,
        maxLength : 30

    },
    password : {
        type : String,
        required : true,
        minLeangth : 3

    },
    firstName :{
        type : String,
        required : true,
        trim : true,
        maxLength : 30
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30
    }
});

const User = mongoose.model('Users', userSchema);


module.exports = {
    User
}