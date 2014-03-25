// md564 by angleman, MIT
// Base64 MD5 of strings and JSON, where JSON attributes are sorted before comparison for consistent results

function MD564(config) {
    "use strict"
	
	var MD5       = require('MD5')
	var convert64 = require('1664').base64
	var sortArray = require('stable')
	
	function getAttributes(obj) {
		var result = []
		for (var i in obj) {
			result.push(i)
		}
		return result;
	}

	function md564(obj) {
		if (typeof obj != 'string') {
			var attributes      = getAttributes(obj)
			var sortedAttr      = sortArray(attributes)
			var sortedObj       = {}
			for (var i=0; i < sortedAttr.length; i++) {
				var attr        = sortedAttr[i]
				sortedObj[attr] = obj[attr]
			}
			obj = JSON.stringify(sortedObj)
		}
		var md5    = MD5(obj)
		var result = convert64.from16(md5)
		return result
	}
	return md564
}

module.exports = MD564()