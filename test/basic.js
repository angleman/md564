// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

describe('basic', function() {
    it('module loads', function() {
		md564 = require('../index.js')
		assert(md564 !== undefined)
    })
})
