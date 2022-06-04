const mongoose = require('../db/connection');

const headSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true
    }
})

const departmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true
    },
    departmentHead: {
        type: headSchema,
        required: true
    },
    complaintsClosed: { type: Number, default: 0, },
    complaintsPending: { type: Number, default: 0, }
});

const Department = mongoose.model('Department', departmentSchema);

function validate(department) {

}
exports.Department = Department;