function bootHAL( server, resolve, reject ){

  const Hypermedia = require( './utils/hypermedia' );
  const boot       = require( 'loopback-boot' );

  server.Hypermedia = Hypermedia;

  boot( server, __dirname, ( err )=>{

    if( err ) reject( err );

    resolve();

  } );

}

module.exports = ( server )=>new Promise( bootHAL.bind( undefined, server ) );



