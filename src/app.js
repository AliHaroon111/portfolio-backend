import express from 'express';
import cors from 'cors';
import { ContactValidationRules, validateContact } from './middlewares/validateContact.js';
import { handleContactFrom } from './controllers/contactController.js';

const app = express();

// 2. Allow your live frontend origin to communicate with this API
app.use(cors({
    origin: 'https://aliharoon111.github.io',
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());

// Base Health-Check Route
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Portfolio Backend Server is healthy and running optimally (ES Modules).',
        timestamp: new Date().toISOString()
    });
});

// middleware execution
app.post('/api/v1/contact', ContactValidationRules, validateContact, handleContactFrom);

export default app;