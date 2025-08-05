import fs from 'fs';
import path from 'path';

function readCSV(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return [];
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.trim().split('\n');
    
    if (lines.length <= 1) {
        console.log(`No data in file: ${filePath}`);
        return [];
    }
    
    const headers = lines[0].split(',');
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const row = {};
        
        for (let j = 0; j < headers.length; j++) {
            // Remove quotes from values
            row[headers[j].replace(/"/g, '')] = values[j] ? values[j].replace(/"/g, '') : '';
        }
        
        data.push(row);
    }
    
    return data;
}

function displayData(data, title) {
    console.log(`\n=== ${title} ===`);
    if (data.length === 0) {
        console.log('No data found.');
        return;
    }
    
    // Display headers
    const headers = Object.keys(data[0]);
    console.log(headers.join(' | '));
    console.log('-'.repeat(headers.join(' | ').length));
    
    // Display data
    data.forEach(row => {
        const values = headers.map(header => row[header] || '');
        console.log(values.join(' | '));
    });
    
    console.log(`\nTotal: ${data.length} records`);
}

// Read and display subscribers
const subscribers = readCSV(path.join(import.meta.dirname, 'subscribers.csv'));
displayData(subscribers, 'SUBSCRIBERS');

// Read and display contacts
const contacts = readCSV(path.join(import.meta.dirname, 'contacts.csv'));
displayData(contacts, 'CONTACTS');

console.log('\nTo export to Excel, simply open the CSV files in Excel:');
