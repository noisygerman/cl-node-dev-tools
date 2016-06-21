module.exports = {

  createHints( { app, allow } ){

    return app.models[ 'HypermediaHints' ].create(
      { allow }
    );

  },

  createLink( { app, href, templated = true, rel, hints } ){

    return app.models[ 'HypermediaLink' ].create(
      { href, templated, rel, hints }
    );

  },

  urlFromRequest( { req } ){

    const protocol  = req.connection.ssl ? 'https://' : 'http://';
    const host      = req.headers.host;
    const baseUrl   = req.baseUrl;

    return `${ protocol }${ host }${ baseUrl }`;

  }

};
