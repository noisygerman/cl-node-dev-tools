describe( 'The generateUITPath function', ()=>{

  const path
    = require( 'path' );

  const uitPath
    = path.join( '..', '..', 'test-util', 'generate-uit-path.js' );

  const generateUITPath
    = require( uitPath );

  it( 'should generate a path relative to the file path provded', ()=>{

    expect( generateUITPath( __filename ) )
      .toEqual( uitPath );

  } );

} );

