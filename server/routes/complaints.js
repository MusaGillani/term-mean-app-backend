const { Complaint } = require('../models/complaint');
const _ = require('lodash'); // For some extra utilities
const authenticateToken = require('../helper/authenticate');

const router = require("express").Router();

router.post('/addComplaint', async (req, res, next) => {
    let data = req.body;
    complaint = new Complaint({ userEmail: data.email, dept: data.dept, date: data.date, details: data.details, assignee: data.assignee, });

    complaint.save();

    res.send(_.pick(complaint,['status']));
});

module.exports = router;
