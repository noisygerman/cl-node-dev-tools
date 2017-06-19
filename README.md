# noisy-node-dev-tools

Implements jasmine preconfigurations

## run-tests.js
Executing `./run-tests.js` will:

1. trigger es-linting of the project an print out the results
2. execute all tests, regardless if errors where detectd during linting.

While I very much apprecite tools like eslint, I usually want to see if my code exeucted correctly first and have the choice to ignore linting,while still being aware of any linting issues currently present.

### tdd
`./run-tests.js` supports a _continous run_ mode. In this mode,the test runner executes,then watches for file changes in the projects _spec_, _lib_ and _server_ folders.

To run the tests in _continuous run_ or _tdd_ mode, run `node_modules/noisy-node-dev-tools/run-tests.js continuously`.

### package.json

```json
{
  "scripts": {                                                                                                     
    "test": "node node_modules/noisy-node-dev-tools/run-tests.js",                                      
    "tdd": "node --inspect node_modules/noisy-node-dev-tools/run-tests.js continuously"                           
  }
```
With the above configuration, you can execute single test runs via `npm test` and tdd continious runs via `npm run tdd`. The `--inspect` flag is optionalof course,it simply alls you to connect a debugger while running your tests.
