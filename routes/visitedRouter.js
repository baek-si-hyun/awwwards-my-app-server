import express from 'express';
import visitedCtrl from '../controllers/visitedCtrl.js'

const router = express.Router();

router.route('/')
    .get(visitedCtrl.getVisited)
    .post(visitedCtrl.setVisited)

export default router