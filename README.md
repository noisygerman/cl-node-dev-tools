# noisy-jasmine

Implements jasmine pre-configurations and test runner tools.

[ ![Codeship Status for noisygerman/noisy-node-dev-tools](https://app.codeship.com/projects/d1fd2930-36ea-0135-3056-466529bde11a/status?branch=master)](https://app.codeship.com/projects/227267)

## `run-tests.js`
Executing `./run-tests.js` will:

1. trigger es-linting of the project an print out the results
2. execute all tests, regardless if errors where detectd during linting.

While I very much appreciate tools like eslint, I usually want to see if my code
execute correctly first and have the choice to defer fixing linting issues.
Using `./run-tests.js`, we get a report on issues, but unlike
`"pretest": "eslint ."`, the tests will still execute.

### tdd
`./run-tests.js` supports a _continous run_ mode. In this mode, the test runner
executes, then watches for file changes in the projects _spec_, _lib_ and
_server_ folders.

To run the tests in _continuous run_ or _tdd_ mode, run
`node_modules/noisy-node-dev-tools/run-tests.js continuously`.

### package.json

```json
{
  "scripts": {
    "test": "node node_modules/noisy-node-dev-tools/run-tests.js",
    "tdd": "node --inspect node_modules/noisy-node-dev-tools/run-tests.js continuously"
}
```
With the above configuration, you can execute single test runs via `npm test`
and tdd continuous runs via `npm run tdd`.

The `--inspect` flag is optional of course. it simply allows you to connect a
debugger while running your tests.


## `test-util/generate-uit-path.js`
`test-util/generate-uit-path.js` can be used in spec files to resolve
paths to uit source-files, if those spec files:

* end in `-spec.js`. `(Spec.js|spec.js`) are currently not supported
* are located in a directory that follows the same structure as the repo root.

Example:

```console
project-root
├── spec
│   └── test-util
│       └── generate-uit-path-spec.js
└── test-util
    └── generate-uit-path-spec.js
```

The `spec` folder, which contains all Jasmine test files, has the same folder
structure as project-root.

I.e. the spec file is located
at `test-util/generate-ui-path-spec.js` with its root ar `project-root/spec`,
while the uit file is located at 'test-util/generate-ui-path.js', but directly
under `project-root`.


```javascript
// file: ./spec/lib/generate-uit-path-spec

describe( 'The generateToUITPath function', ()=>{

  it( 'should resolve the path from its own test file to its own script',()=>{

    const pathToUnitInTest
      = '../../lib/generate-uit-path';

    const generateUITPath
      = require( pathToUnitInTest );

    expect( generateUITPath( __filename ) )
      .toEqual( pathToUnitInTest );

  } );

} );

```

