const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://bijjahimanshu05:Explore-MongoDB@cluster0.g0j9e.mongodb.net/paytm")

// const userSchema = new mongoose.Schema({
//     username : String,
//     password : String,
//     firstName : String,
//     lastName : String
// });

const userSchem = new mongoose.Schema({
    username : {
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
    firstname :{
        type : String,
        required : true,
        trim : true,
        maxLength : 30
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30
    }
});


const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})



const User = mongoose.model('Users', userSchem);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}