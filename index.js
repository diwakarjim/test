const fetch = require('node-fetch');

// ServiceNow instance details
const instanceUrl = 'https://dev228163.service-now.com';
const username = 'admin';
const password = 'w1y!R7cDy%NZ';

// Base64 encode the credentials for Basic Authentication
const authString = Buffer.from(`${username}:${password}`).toString('base64');

// Fetch incidents from ServiceNow
async function fetchIncidents() {
    try {
        const response = await fetch(`${instanceUrl}/api/now/table/incident`, {
            headers: {
                'Authorization': `Basic ${authString}`,
                'Accept': 'application/json'
            }
        });
        const incidents = await response.json();
        console.log('Fetched Incidents:', incidents);
        return incidents;
    } catch (error) {
        console.error('Error fetching incidents:', error);
        throw error;
    }
}

// Example usage
fetchIncidents();
