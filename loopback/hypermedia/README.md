### What is this?

A es6 promise that will register HypermediaLink and HypermediaHints models to a loopback application (app). 
It will also add the Hypermedia namespace to the app, which consists of two functions createHints and createLink.

### Sample Usage

```
const bootHAL  = require( 'cl-node-dev-tools/utils/loopback-pre-boot-hal' )( app );

bootHAL.then( bootApplication );
```

Make sure that this is called before the application's main boot script. 
Otherwise models dependent on this library will break.