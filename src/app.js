import express from 'express';
import cors from 'cors';

const app = express();

// Global Middlewares
app.use(cors()); 
app.use(express.json()); 

// Base Health-Check Route
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Portfolio Backend Server is healthy and running optimally (ES Modules).',
        timestamp: new Date().toISOString()
    });
});

export default app;