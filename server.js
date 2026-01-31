const path = require('path');

// Set production environment
process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || 3000;

// Navigate to the standalone directory's server script
// This allows Plesk to find the entry point while leveraging Next.js standalone optimizations
const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');

console.log('Starting Next.js standalone server from:', standaloneServerPath);

try {
     // Execute the standalone server
     require(standaloneServerPath);
} catch (error) {
     console.error('Error starting Next.js server. Did you run "npm run build" first?');
     console.error(error);
     process.exit(1);
}
