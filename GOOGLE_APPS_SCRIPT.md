# Google Apps Script for Form Submissions

## Script URL
https://script.google.com/macros/s/AKfycbz77Hnv8gM8oBiNblmYEhCNbJA9bVQ1nHE0gPzfYEdNMMdUBCFVymBg9bYUzMtaT9lfBg/exec

## Google Sheet ID
1arFrNHUoJ_rbi8HQkHJmlhADd4q_PjSIy7yMbGtQ_Bc

## Sheet Structure

### contactForm Sheet
- Column A: Timestamp (Date)
- Column B: Name (Text)
- Column C: Email (Text)
- Column D: Message (Text)

### subscriptionForm Sheet
- Column A: Timestamp (Date)
- Column B: Name (Text)
- Column C: Email (Text)

## Google Apps Script Code

```javascript
function doPost(e) {
  const sheetId = "1arFrNHUoJ_rbi8HQkHJmlhADd4q_PjSIy7yMbGtQ_Bc";
  const ss = SpreadsheetApp.openById(sheetId);
  
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Basic validation
    if (!data.email || !data.email.includes('@')) {
      throw new Error('Invalid email address');
    }
    
    if (data.formType === 'contact' && (!data.message || data.message.length > 1000)) {
      throw new Error(data.message ? 'Message too long' : 'Message required');
    }
    
    // Save to appropriate sheet
    const sheet = ss.getSheetByName(data.formType === 'contact' ? 'contactForm' : 'subscriptionForm');
    const rowData = data.formType === 'contact' 
      ? [new Date(), data.name, data.email, data.message]
      : [new Date(), data.name, data.email];
    
    sheet.appendRow(rowData);
    
    // Set CORS headers
    const output = ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: data.formType === 'contact' 
        ? 'Thank you for your message!' 
        : 'Thanks for subscribing!'
    }));
    
    output.setMimeType(ContentService.MimeType.JSON);
    output.setHeader('Access-Control-Allow-Origin', '*');
    output.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    output.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    return output;
    
  } catch (error) {
    const output = ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.message
    }));
    
    output.setMimeType(ContentService.MimeType.JSON);
    output.setHeader('Access-Control-Allow-Origin', '*');
    output.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    output.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    return output;
  }
}

// Handle preflight OPTIONS requests
function doOptions(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setHeader('Access-Control-Allow-Origin', '*');
  output.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  output.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  return output;
}
```

## Features
- Contact form submissions go to "contactForm" sheet
- Subscription form submissions go to "subscriptionForm" sheet
- Basic email validation
- Error handling with user-friendly messages
- Automatic timestamp for each submission
- Message length validation (1000 characters max)
- **CORS headers enabled** for cross-origin requests
- **OPTIONS method support** for preflight requests

## Security Notes
- The script is deployed as a web app with "Anyone" access
- Consider adding CAPTCHA for production use
- Implement rate limiting if needed
- Add input sanitization for enhanced security
- CORS is configured to allow requests from any origin
