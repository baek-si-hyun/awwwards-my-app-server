import express from 'express';
import faqsCtrl from '../controllers/faqsCtrl.js'

const router = express.Router();

router.route('/')
    .get(faqsCtrl.getFaqs)

export default router