const mongoose = require('../db/connection');
const person = require('../models/person');

const complaintSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    details: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Inprogess', 'pending', 'closed'],
        default: "Inprogess"
    },
    assignee: {
        type: person,
    }
})

const Complaint = mongoose.model('Complaint',complaintSchema);

exports.Complaint = Complaint;