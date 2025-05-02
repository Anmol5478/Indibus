const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/apply' )

const userSchema= mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name"]
    },
    Phonenumber: Number,
    Description: String,
    Jobrole: String,
    resume: {
        data: Buffer,
        contentType: String
    }
})

module.exports=mongoose.model("user", userSchema);

