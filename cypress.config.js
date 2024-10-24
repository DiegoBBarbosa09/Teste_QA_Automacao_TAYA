const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({  
  e2e: {
    baseUrl: 'https://imobiliario.desenvolvimento.taya.com.br',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      allureWriter(on, config);

    },
    specPattern: "cypress/e2e/features/calculadora/*.feature",
    hideXHR: true,
    watchForFileChanges: false,
  }
});
