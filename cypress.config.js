const { defineConfig } = require("cypress");
module.exports = defineConfig({
  // video: false,
  // watchForFileChanges: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 70000,
  ignoreTestFile: ["*.js", "*.md"],
  projectId: "vh1msn",
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
      // implement node event listeners here
    },
    specPattern: ["**/*.feature"],
    testIsolation: false
  },
});