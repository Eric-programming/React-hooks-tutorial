const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    email: {
        type: String, 
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        "Please add a valid Email"],
        required: [true, "Please enter a email"],
        unique: [true, "This email address is already in use."]
    },
    role:{
        type: String, 
        enum: ["user", "publisher"],
        default: "user"
    }, 
    password: {
        type: String, 
        required: [true, "Please enter a password"], 
        minlength: 6,
        select: false
    },
    resetPasswordToken: String, 
    resetPasswordExpiration: Date, 
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

const User = UserSchema.model("User", UserSchema);


module.exports = User;