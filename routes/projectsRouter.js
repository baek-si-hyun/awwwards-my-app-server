const express = require('express');
const projectsCtrl = require('../controllers/projectsCtrl.js');

const router = express.Router();

router.route('/')
    .get(projectsCtrl.getProjects);

module.exports = router;
