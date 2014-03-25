// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

var testString   = 'hello'
var stringResult = '1TGK0fk4hfTgamcP4G5xMI'
var testObject   = {bar: 'grill', foo: 'man'}
var testObject2  = {foo: 'man', bar: 'grill'}
var objectResult = '3MEEOkTwl6NBNuzrYVpHeX'

describe('basic', function() {
    it('module loads', function() {
		MD564 = require('../index.js')
		assert(MD564 !== undefined)
		
    })
	
    it('string encodes', function() {
		MD564 = require('../index.js')
		var test = MD564(testString)
		assert(test == stringResult)
    })
	
    it('sorted object encodes', function() {
		MD564 = require('../index.js')
		var test = MD564(testObject)
		assert(test == objectResult)
    })
	
    it('unsorted object encodes', function() {
		MD564 = require('../index.js')
		var test = MD564(testObject2)
		assert(test == objectResult)
    })
})

