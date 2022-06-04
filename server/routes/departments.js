const { Department } = require('../models/department');
const _ = require('lodash'); // For some extra utilities
const authenticateToken = require('../helper/authenticate');

const router = require("express").Router();

router.post('/addDep', authenticateToken, async (req, res, next) => {
    let data = req.body;
    console.log(data);
    dep = new Department({ departmentName: data.departmentName, departmentHead: data.departmentHead });

    await dep.save();

    res.send(_.pick(dep, ['departmentName']));

});

module.exports = router;
