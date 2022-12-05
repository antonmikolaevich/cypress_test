const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:{
  baseUrl: 'https://www.saucedemo.com/',
  },
  chromeWebSecurity: false,
  reporter: "cypress-junit-reporter",
  reporterOptions: {
    mochaFile: "cypress/results/results.xml",
    toConsole: true
  }
  
})