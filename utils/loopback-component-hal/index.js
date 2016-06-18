const Hypermedia = require( './utils/hypermedia' );


module.exports = ( server )=>{

  const boot = require( 'loopback-boot' );

  server.Hypermedia = Hypermedia;

  console.log( __dirname );

  boot( server, __dirname, ( err )=>{
    
    if( err ) throw err;

  } );

};


