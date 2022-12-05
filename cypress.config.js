const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig(
  {
  e2e:{
  setupNodeEvents(on, config) {
    return registerReportPortalPlugin(on, config);
  }
  },
  chromeWebSecurity: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-junit-reporter, @reportportal/agent-js-cypress",
    cypressJunitReporterReporterOptions: {
      mochaFile: "cypress/results/results.xml",
      toConsole: true
    },
    reportportalAgentJsCypressReporterOptions: {
      endpoint: 'https://reportportal.epam.com/api/v1',
      token: '6dbbd2b0-2395-48ff-adab-63209b916b35',
      launch: 'anton_rak_TEST_EXAMPLE',
      project: 'anton_rak_personal',
      description: 'cypress_test_project'
    }
  }
}
)