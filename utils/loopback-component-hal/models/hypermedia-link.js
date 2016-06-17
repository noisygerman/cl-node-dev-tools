module.exports = ( HypermediaLink )=> {

  function create( { href, templated = false, rel, hints } ){

    return Object.freeze( templated === true
        ? { href, templated, rel, hints }
        : { href, rel, hints }
     );

  }

  HypermediaLink.create = create;

};

