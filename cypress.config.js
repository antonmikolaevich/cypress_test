const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
  baseUrl: 'https://www.saucedemo.com/',
  setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
  }
  },
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }
  
})