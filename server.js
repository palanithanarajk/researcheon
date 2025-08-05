import express from 'express';
import cors from 'cors';
import subscribeRouter from './api/subscribe.js';
import contactRouter from './api/contact.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/subscribe', subscribeRouter);
app.use('/api/contact', contactRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoints available:`);
    console.log(`  POST /api/subscribe`);
    console.log(`  POST /api/contact`);
    console.log(`  GET /api/health`);
});
