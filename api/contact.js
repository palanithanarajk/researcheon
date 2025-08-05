import express from 'express';
import { handleContact } from './save-to-csv.js';

const router = express.Router();

// POST /api/contact
router.post('/', (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address' });
        }
        
        handleContact(name, email, subject, message);
        res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
