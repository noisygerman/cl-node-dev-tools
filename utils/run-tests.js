/**
 * @file Runs jasmine specs based off configuration file in jasmine.json
 */

module.exports = function getTestRunner(){

  const Jasmine = require( 'jasmine' );
  const jasmine = new Jasmine();

  jasmine.loadConfigFile( 'spec/support/jasmine.json' );
  return jasmine.execute.bind( jasmine );

};

