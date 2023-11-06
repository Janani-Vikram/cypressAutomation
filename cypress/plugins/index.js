/// <reference types="cypress" />
/**

 * @type {Cypress.PluginConfig}

 */
 const cucumber = require('cypress-cucumber-preprocessor').default
 const fs = require('fs-extra');
 const path = require('path');

 function getConfigurationByFile(file) {
   const pathToConfigFile = path.resolve(

    // '..',
   'cypress/config-files',
     `${file}.json`
   );
   return fs.readJson(pathToConfigFile);
 }

// eslint-disable-next-line no-unused-vars

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  //environment variables
  const file = config.env.fileConfig || 'production';
  return getConfigurationByFile(file);
}