
var fs = require('mz/fs')
var path = require('path')
var destroy = require('destroy')
var mkdirp = require('mkdirp-then')
var Promise = require('any-promise')

module.exports = function (src, dest) {
  var read
  var write
  if (typeof src === 'string') {
    src = path.resolve(src)
  } else if (src && typeof src.pipe === 'function') {
    read = src
  } else {
    throw new TypeError('only filenames and read streams supported')
  }
  dest = path.resolve(dest)
  // where the file will be temporarily copied to
  // it'll be saved to the same folder, then renamed.
  var tmp = dest + affix()

  return mkdirp(path.dirname(dest)).then(function () {
    return new Promise(function (resolve, reject) {
      read = read || fs.createReadStream(src)
      read.on('error', onfinish)
      write = fs.createWriteStream(tmp)
      write.on('error', onfinish)
      write.on('close', onfinish)

      read.pipe(write)

      function onfinish(err) {
        read.removeListener('error', onfinish)
        write.removeListener('error', onfinish)
        write.removeListener('close', onfinish)
        if (err instanceof Error) reject(err)
        else resolve(dest)
      }
    })
  }).then(function () {
    return fs.rename(tmp, dest)
  }).then(function () {
    return dest;
  }).catch(function (err) {
    // always destroy the streams
    read && destroy(read)
    write && destroy(write)
    // always clean up temp files
    fs.unlink(tmp).catch(noop)
    throw err
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

function noop() {}
