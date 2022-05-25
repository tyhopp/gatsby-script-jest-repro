# gatsby-script-jest-repro

Attempted reproduction of https://github.com/gatsbyjs/gatsby/issues/35736. Successfully reproduced.

Follows [Gatsby unit testing guide from the Gatsby documentation](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/) for setup.

## Usage

- Clone this repo and navigate to it in your terminal
- `npm i`
- `npm run test`

Expect to see tests pass but encounter:

```
/Users/tyhopp/Desktop/gatsby-script-jest-repro/node_modules/gatsby-script/dist/index.js:1
({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export * from "./gatsby-script";
                                                                                    ^^^^^^

SyntaxError: Unexpected token 'export'
at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1773:14)
```
