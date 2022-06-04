const mongoose = require('../db/connection');
const joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 45,
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 12
    },
    userType: {
        type: String,
        enum: ['maker','receiver'],
        required: true,
    },
    userDepartment: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User',userSchema);

function validate(user){
    const schema = joi.object({
        name: joi.string().min(4).max(45).required(),
        email: joi.string().min(6).max(255).required().email(),
        password: joi.string().min(5).max(12).required(),
        userType: joi.string().required(),
        userDepartment: joi.string().required(),
    });

    return schema.validate(user);
}

exports.User = User;
exports.validate = validate; 