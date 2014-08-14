
var fs = require('mz/fs')
var path = require('path')
var mkdirp = require('mkdirp-then')
var Promise = require('native-or-bluebird')

module.exports = function (src, dest) {
  src = path.resolve(src)
  dest = path.resolve(dest)
  // where the file will be temporarily copied to
  // it'll be saved to the same folder, then renamed.
  var tmp = dest + affix()

  return mkdirp(path.dirname(dest)).then(function () {
    return new Promise(function (resolve, reject) {
      var read = fs.createReadStream(src)
        .on('error', onerror)
      var write = fs.createWriteStream(tmp)
        .on('error', onerror)
        .on('close', onclose)

      read.pipe(write)

      function onerror(err) {
        fs.unlink(tmp)
        cleanup()
        reject(err)
      }

      function onclose() {
        cleanup()
        resolve()
      }

      function cleanup() {
        read.removeListener('error', onerror)
        write.removeListener('error', onerror)
        write.removeListener('close', onclose)
      }
    })
  }).then(function () {
    return fs.rename(tmp, dest)
  })
}

// an affix to attach to the temporary file
// to avoid race conditions and
function affix() {
  return '.' + random() + '.tmp'
}

function random() {
  return Math.random().toString(36).slice(2)
}
