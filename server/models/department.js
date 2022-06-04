const mongoose = require('../db/connection');
const person = require('../models/person');


const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true
    },
    departmentHead: {
        type: person,
        required: true
    },
    complaintsClosed: { type: Number, default: 0, },
    complaintsPending: { type: Number, default: 0, }
});

const Department = mongoose.model('Department', departmentSchema);

exports.Department = Department;