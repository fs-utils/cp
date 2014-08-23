
var fs = require('mz/fs')
var path = require('path')

var cp = require('..')

var build = path.join(__dirname, '..', 'build')

require('rimraf').sync(build)
require('mkdirp').sync(build)

describe('fs-cp', function () {
  it('should copy a string', function () {
    var out = path.join(build, 'test.js')
    return cp(__filename, out).then(function () {
      return fs.stat(out)
    })
  })

  it('should copy a stream', function () {
    var out = path.join(build, 'test2.js')
    return cp(fs.createReadStream(__filename), out).then(function () {
      return fs.stat(out)
    })
  })
})
