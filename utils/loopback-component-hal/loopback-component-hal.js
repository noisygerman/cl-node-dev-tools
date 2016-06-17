module.exports = ( server )=>{

  const boot = require( 'loopback-boot' );

  server.Hypermedia = require( ' ../utils/hypermedia' );

  boot( server, __dirname, ( err )=>{

    if( err ) throw err;

  } );
  
};


