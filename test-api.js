import http from 'http';

// Function to make HTTP requests
function makeRequest(options, data) {
    return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: body
                });
            });
        });
        
        req.on('error', (err) => {
            reject(err);
        });
        
        if (data) {
            req.write(JSON.stringify(data));
        }
        
        req.end();
    });
}

// Test subscription endpoint
async function testSubscription() {
    console.log('Testing /api/subscribe...');
    
    const testData = {
        name: 'Test User',
        email: 'test@example.com'
    };
    
    try {
        const response = await makeRequest({
            hostname: 'localhost',
            port: 3001,
            path: '/api/subscribe',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(JSON.stringify(testData))
            }
        }, testData);
        
        console.log(`Status: ${response.statusCode}`);
        console.log(`Response: ${response.body}`);
        
        if (response.statusCode === 200) {
            console.log('✅ Subscription test passed!');
        } else {
            console.log('❌ Subscription test failed!');
        }
    } catch (error) {
        console.log('❌ Error testing subscription:', error.message);
        console.log('Make sure the server is running: node server.js');
    }
}

// Test contact endpoint
async function testContact() {
    console.log('\nTesting /api/contact...');
    
    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message.'
    };
    
    try {
        const response = await makeRequest({
            hostname: 'localhost',
            port: 3001,
            path: '/api/contact',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(JSON.stringify(testData))
            }
        }, testData);
        
        console.log(`Status: ${response.statusCode}`);
        console.log(`Response: ${response.body}`);
        
        if (response.statusCode === 200) {
            console.log('✅ Contact test passed!');
        } else {
            console.log('❌ Contact test failed!');
        }
    } catch (error) {
        console.log('❌ Error testing contact:', error.message);
        console.log('Make sure the server is running: node server.js');
    }
}

// Test health check
async function testHealth() {
    console.log('\nTesting /api/health...');
    
    try {
        const response = await makeRequest({
            hostname: 'localhost',
            port: 3001,
            path: '/api/health',
            method: 'GET'
        });
        
        console.log(`Status: ${response.statusCode}`);
        console.log(`Response: ${response.body}`);
        
        if (response.statusCode === 200) {
            console.log('✅ Health check passed!');
        } else {
            console.log('❌ Health check failed!');
        }
    } catch (error) {
        console.log('❌ Error testing health check:', error.message);
        console.log('Make sure the server is running: node server.js');
    }
}

// Run all tests
async function runTests() {
    console.log('=== API Testing ===');
    console.log('Make sure the server is running (node server.js) before testing.\n');
    
    await testHealth();
    await testSubscription();
    await testContact();
    
    console.log('\n=== Testing Complete ===');
    console.log('Check the CSV files to see if data was saved:');
    console.log('  subscribers.csv');
    console.log('  contacts.csv');
}

// Run tests
runTests();
