const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({ 
  testDir: './tests', // Folder where test files are stored 
  timeout: 30000, // 30 seconds 
  use: { 
    headless: true, // Run tests in headless mode 
    viewport: { width: 1280, height: 720 }, // Default browser size 
    
    actionTimeout: 5000,
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/'
    }, 
});
