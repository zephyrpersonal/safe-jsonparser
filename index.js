var noop = function() {}

/**
 * safeJsonParse
 *
 * @param {string} jsonString
 * @param {function} [onError=noop]
 */
var safeJsonParse = function(jsonString, onError) {
  var parsed
  onError = onError || noop
  try {
    parsed = JSON.parse(jsonString)
  } catch (e) {
    onError(e)
  }
  return parsed
}

module.exports = safeJsonParse
