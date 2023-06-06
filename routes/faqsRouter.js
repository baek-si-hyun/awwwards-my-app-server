const express = require('express');
const faqsCtrl = require('../controllers/faqsCtrl.js');

const router = express.Router();

router.route('/')
    .get(faqsCtrl.getFaqs);

module.exports = router;