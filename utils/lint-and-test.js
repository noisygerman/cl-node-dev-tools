( ()=>{

  const runTests = require( './run-tests' )();

  require( 'child_process' ).spawn(
    'node',
    [ 'node_modules/eslint/bin/eslint.js', '-c', '.eslintrc.json', './' ],
    { stdio: 'inherit' }
  )
  .on( 'close', runTests );

} )();
