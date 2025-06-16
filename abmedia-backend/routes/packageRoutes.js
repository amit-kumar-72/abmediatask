import express from 'express';
import { createPackage, getAllPackages } from '../controllers/packageController.js';

const router = express.Router();

router.post('/top-selling', createPackage);
router.get('/top-selling', getAllPackages);

export default router;
