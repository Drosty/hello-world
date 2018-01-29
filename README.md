### About this demo project

This is a simple Serverless Framework project with a couple of things to note.

- There is one [handler function][handler] that creates a single API endpoint `/hello`.
- There are a few environment variables in the [`serverless.yml`][enVariables] that are used while deploying.
- Tests are configured using [Jest][jest].

### Usage

Clone this repo

```bash
$ git clone https://github.com/fwang/hello
```

Install the NPM packages

```bash
$ npm install
```

Make some changes to `hanlder.js` and run tests

```bash
$ npm run test
```

Commit and push to master

```bash
$ git commit
$ git push
```

[enVariables]: https://github.com/fwang/hello/blob/master/serverless.yml#L11
[jest]: https://facebook.github.io/jest/
[handler]: https://github.com/fwang/hello/blob/master/controllers/hello.js
