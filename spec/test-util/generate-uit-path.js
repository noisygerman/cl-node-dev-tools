const path
 = require( 'path' );

const rootPath
  = process.cwd();

/**
 * Generates the path to the unit-in-test based on the path of the spec file
 *
 * For example, if the spec is located at 'spec/foo/bar/baz-spec.js', then the
 * path generate by this script is '../../foo/bar/baz.js'
 *
 * @param { string } specPath - The path to the spec
 *
 * @returns { string } The path to the unit-in-test relative to the specPath
 **/
function generateUITPath( specPath ){

  const relativeToRoot
    = path.relative( rootPath, specPath );

  const rootRelativeToSpec
    = path.relative( specPath, rootPath );

  const basename
    = path.basename( specPath, '-spec.js' );

  const specDirEnd
    = relativeToRoot.indexOf( path.sep ) + 1;

  const uitDirname
    = path.dirname( relativeToRoot.substring( specDirEnd ) );

  return path.join( rootRelativeToSpec, uitDirname, `${ basename }.js` );

}

module.exports = generateUITPath;

