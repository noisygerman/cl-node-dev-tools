module.exports = {

  createHints( { app, allow } ) {

    return app.models[ 'HypermediaHints' ].create(
      { allow }
    );

  },

  createLink( { app, href, templated = true, rel, hints } ) {

    return app.models[ 'HypermediaLink' ].create(
      { href, templated, rel, hints }
    );

  }

};
