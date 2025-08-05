import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the api directory exists
const apiDir = path.join(__dirname, '..');
if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
}

// Function to append data to CSV file
function appendToCSV(filePath, data) {
    const fileExists = fs.existsSync(filePath);
    
    // Create CSV header if file doesn't exist
    if (!fileExists) {
        const headers = Object.keys(data).join(',');
        fs.writeFileSync(filePath, headers + '\n');
    }
    
    // Convert data to CSV format
    const csvRow = Object.values(data).map(value => 
        typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
    ).join(',');
    
    // Append to file
    fs.appendFileSync(filePath, csvRow + '\n');
}

// Handle subscription data
function handleSubscription(name, email) {
    const filePath = path.join(__dirname, '../subscribers.csv');
    const timestamp = new Date().toISOString();
    
    const subscriptionData = {
        timestamp,
        name,
        email,
        type: 'newsletter'
    };
    
    appendToCSV(filePath, subscriptionData);
    console.log('Subscription saved:', subscriptionData);
}

// Handle contact form data
function handleContact(name, email, subject, message) {
    const filePath = path.join(__dirname, '../contacts.csv');
    const timestamp = new Date().toISOString();
    
    const contactData = {
        timestamp,
        name,
        email,
        subject,
        message
    };
    
    appendToCSV(filePath, contactData);
    console.log('Contact saved:', contactData);
}

// Export functions for use in other modules
export {
    handleSubscription,
    handleContact
};
