import express from 'express';
import { upload } from '../config/multerConfig.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { uploadSurvey, getAllSurveys, downloadSurvey } from '../controllers/surveyController.js';

const router = express.Router();

// Get all surveys
router.get('/surveys', getAllSurveys);

// Upload new survey (admin only)
router.post('/surveys/upload', authenticateToken, upload.single('file'), uploadSurvey);

// Download survey
router.get('/surveys/download/:id', downloadSurvey);

export default router;