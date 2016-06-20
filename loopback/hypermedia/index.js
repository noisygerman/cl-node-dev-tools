module.exports = ( server )=>new Promise( ( resolve, reject )=>{

  const Hypermedia = require( './hypermedia' );
  const boot       = require( 'loopback-boot' );

  server.Hypermedia = Hypermedia;

  boot( server, __dirname, ( err )=>{

    if( err ) reject( err );

    resolve( server );

  } );

} );
