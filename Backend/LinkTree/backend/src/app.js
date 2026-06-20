import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes/index.routes.js';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'LinkTree API Server'
    });
});

export default app;