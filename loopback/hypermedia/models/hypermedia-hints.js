module.exports = ( HypermediaHints )=>{

  function create( { allow, formats = [ 'application/json' ] } ){

    return Object.freeze( { allow, formats } );

  };

  HypermediaHints.create = create;

};

