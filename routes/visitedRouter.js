const express = require('express');
const visitedCtrl = require('../controllers/visitedCtrl.js');

const router = express.Router();

router.route('/')
    .get(visitedCtrl.getVisited)
    .post(visitedCtrl.setVisited);

module.exports = router;
