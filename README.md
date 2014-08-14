
# cp

[![NPM version][npm-image]][npm-url]
[![Latest tag][github-tag]][github-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Copy files with error handling and promise support.
Specifically, if the process crashes while you're copying a file,
you won't end up with half-written copied files.
It should also avoid race conditions, meaning
you should be able to `cp` the same files at the same time and it'll be fine.

## API

```js
var cp = require('fs-cp')

cp('package.json', 'package2.json').then(function () {

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
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
