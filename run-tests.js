if ( require.main === module ){

  if( process.argv[ 2 ] === 'continuously' ){

    const root = require( 'path' ).relative( process.cwd(), __dirname ) || '.';

    require( 'child_process' ).fork( `${ root }/utils/lint-and-test.js` )
      .on( 'close', require( './utils/start-tdd-watch-loop' ) );

  } else {

    require( './utils/run-tests' )()();

  }

} else {

  module.exports = require( './utils/run-tests' )();

}

