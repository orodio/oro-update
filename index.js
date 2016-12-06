var cursor = require("oro-cursor")

function _update (path, fn, $$$, undefined_state) {
  $$$ = Object.assign({}, $$$)
  var target = $$$

  for (var i = 0; i < path.length - 1; i++) {
    if (undefined === target[path[i]]) target[path[i]] = {}
    target = target[path[i]]
  }

  target[path[i]] = fn(undefined === target[path[i]] ? undefined_state : target[path[i]])
  return $$$
}

module.exports = function update (path, fn, undef) {
  return function __update ($$$) {
    try {
      return _update(cursor(path), fn, $$$, undef)
    } catch () {
      console.error("oro-update: unable to update `" + cursor(path).join("|") + "`")
      return $$$
    }
  }
}
