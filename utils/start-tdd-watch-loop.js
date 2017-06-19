module.exports = function startTddWatchLoop(){

  function byPathFilter(){

    const regx = /^(spec|lib|server)[^$.]*($|\.js$|\.json$)/;

    return regx.test.bind( regx );

  }

  const watchOptions = {
    ignoreDotFiles:      true,
    filter:              byPathFilter(),
    ignoreUnreadableDir: true,
    ignoreNotPermitted:  true
  };

  return ()=>{

    require( 'watch' ).createMonitor( './', watchOptions, ( monitor )=>{

      function onChanged(){

        monitor.removeListener( 'changed', onChanged );
        monitor.removeListener( 'removed', onChanged );
        monitor.removeListener( 'created', onChanged );

        const root
          = require( 'path' ).relative( process.cwd(), __dirname ) || '.';

        require( 'child_process' )
          .fork( `${ root }/lint-and-test.js` )
          .on( 'close', ()=>{

            monitor.on( 'changed', onChanged );
            monitor.on( 'removed', onChanged );
            monitor.on( 'created', onChanged );

          } );

      }

      monitor.on( 'changed', onChanged );
      monitor.on( 'removed', onChanged );
      monitor.on( 'created', onChanged );

    } );

  };

};

