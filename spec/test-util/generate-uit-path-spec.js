describe( 'The generateUITPath function', ()=>{

  const path
   = require( 'path' );

  const generateUITPath
    = require( process.cl_test_util.generateUITPath( __filename ) );

  it( 'should generate a path relative to the file path provded', ()=>{

    const expected
      = path.join( '..', '..', 'test-util', 'generate-uit-path.js' );

    expect( generateUITPath( __filename ) )
      .toEqual( expected );

  } );

} );

