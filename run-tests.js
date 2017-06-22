if ( require.main === module ){

  const flag
    = process.argv[ 2 ];

  // execute in this process and exit
  if( flag === 'without-linting' ) return require( './utils/run-tests' )()();

  const onInitialTestsRun = flag === 'continuously'
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

