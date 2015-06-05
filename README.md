
# cp

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

A tiny utility to help you copy files:

- Always cleans up file descriptors
- `mkdir -p` support
- Promise support
- No half-written files
- Insusceptible to race conditions, meaning you can do multiple copies fine

## API

```js
var cp = require('fs-cp')

// file to file
cp('package.json', 'package2.json').then(function () {

})

// stream to file
cp(res, 'response.json').then(function () {

})
```

[npm-image]: https://img.shields.io/npm/v/fs-cp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fs-cp
[github-tag]: http://img.shields.io/github/tag/fs-utils/cp.svg?style=flat-square
[github-url]: https://github.com/fs-utils/cp/tags
[travis-image]: https://img.shields.io/travis/fs-utils/cp.svg?style=flat-square
[travis-url]: https://travis-ci.org/fs-utils/cp
[coveralls-image]: https://img.shields.io/coveralls/fs-utils/cp.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/fs-utils/cp?branch=master
[david-image]: http://img.shields.io/david/fs-utils/cp.svg?style=flat-square
[david-url]: https://david-dm.org/fs-utils/cp
[license-image]: http://img.shields.io/npm/l/cp.svg?style=flat-square
[license-url]: LICENSE.md
[downloads-image]: http://img.shields.io/npm/dm/fs-cp.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/fs-cp
