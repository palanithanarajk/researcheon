import express from 'express';
import { handleSubscription } from './save-to-csv.js';

const router = express.Router();

// POST /api/subscribe
router.post('/', (req, res) => {
    try {
        const { name, email } = req.body;
        
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address' });
        }
        
        handleSubscription(name, email);
        res.json({ success: true, message: 'Subscription successful' });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
