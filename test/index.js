
var fs = require('mz/fs')
var path = require('path')
var assert = require('assert')

var cp = require('..')

var build = path.join(__dirname, '..', 'build')

require('rimraf').sync(build)
require('mkdirp').sync(build)

describe('fs-cp', function () {
  it('should copy a string', function () {
    var out = path.join(build, 'test.js')
    return cp(__filename, out).then(function (_out) {
      assert.equal(out, _out);
      return fs.stat(out)
    })
  })

  it('should copy a stream', function () {
    var out = path.join(build, 'test2.js')
    return cp(fs.createReadStream(__filename), out).then(function (_out) {
      assert.equal(out, _out);
      return fs.stat(out)
    })
  })

  it('should throw if the src is not a string or stream', function () {
    assert.throws(function () {
      cp(null, build)
    })
  })

  it('should handle errors', function () {
    return cp(__filename, build).then(function () {
      throw new Error('boom')
    }).catch(function (err) {
      assert.equal(err.code, 'EISDIR')
    })
  })
})
