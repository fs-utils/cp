
var fs = require('mz/fs')
var path = require('path')

var cp = require('..')

var build = path.join(__dirname, '..', 'build')

require('rimraf').sync(build)
require('mkdirp').sync(build)

describe('fs-cp', function () {
  it('should copy', function () {
    var out = path.join(build, 'test.js')
    return cp(__filename, out).then(function () {
      return fs.stat(out)
    })
  })
})
