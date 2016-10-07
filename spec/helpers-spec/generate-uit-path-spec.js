describe( 'The generateUITPath function', ()=>{

  const path
   = require( 'path' );

  const generateUITPath
    = process.cl_test_util.generateUITPath;

  it( 'should generate a path relative to the file path provded', ()=>{

    const expected
      = path.join( '..', '..', '..', 'helpers-spec', 'generate-uit-path.js' );

    expect( generateUITPath( __filename ) )
      .toEqual( expected );

  } );

} );

