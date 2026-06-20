import { Router } from 'express';
import authRoutes from './auth.routes.js';

const router = Router();

// Index all routes
router.use('/auth', authRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is running'
    });
});

export default router;
