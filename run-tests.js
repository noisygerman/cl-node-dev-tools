if ( require.main === module ){

  const onInitialTestsRun = process.argv[ 2 ] === 'continuously'
    ? require( './utils/start-tdd-watch-loop' )
    : ()=>()=>null; // no-op - run tests just once

  const root
    = require( 'path' ).relative( process.cwd(), __dirname ) || '.';

  require( 'child_process' )
    .fork( `${ root }/utils/lint-and-test.js` )
    .on( 'close', onInitialTestsRun() );

} else {

  module.exports = require( './utils/run-tests' )();

}

