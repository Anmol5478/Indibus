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


const companySchema= mongoose.Schema({
    title: String,
    company: String,
    location: String,
    description: String
});

module.exports=mongoose.model("user", userSchema);
module.exports=mongoose.model("company", companySchema);

