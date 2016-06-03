
if ( require.main === module ){

  if( process.argv[ 2 ] === 'continuously' ){

    require( 'child_process' ).fork( './utils/lint-and-test.js' )
      .on( 'close', require( './utils/start-tdd-watch-loop' ) );

  } else {

    require( './utils/run-tests' )()();

  }

} else {

  module.exports = require( './utils/run-tests' )();

}

