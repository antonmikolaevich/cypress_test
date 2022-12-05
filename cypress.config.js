const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
  baseUrl: 'https://www.saucedemo.com/',
  setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
  }
  },
  chromeWebSecurity: false,
  reporter: "cypress-junit-reporter",
  reporterOptions: {
    mochaFile: "cypress/results/results.xml",
    toConsole: true
  }
  
})