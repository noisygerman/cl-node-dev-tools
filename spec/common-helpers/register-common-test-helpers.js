//  To make these tools available in your project, add
//  '../node_modules/cl-node-dev-tools/spec/common-helpers/**/*.js'
//  to your helpers list in spec/support/jasmine.json

const testUtils = {

  // Usage: From your spec file, call
  //
  //   const uit
  //     = process.cl_test_util.generateUITPath( __filename );
  //
  // See spec/test-util/generate-uit-path.js for more info
  generateUITPath: require( '../../test-util/generate-uit-path' )

};

process.cl_test_util
  = process.cl_test_util
  = Object.assign( ( process.cl_test_util || {} ), testUtils );

