import express from 'express';
import { createDestination, getAllDestinations } from '../controllers/destinationController.js';

const router = express.Router();

router.post('/destinations', createDestination);
router.get('/destinations', getAllDestinations);

export default router;
