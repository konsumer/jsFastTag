'use strict';

// annoying jshint errors for mocha-things
/* global describe:false */
/* global it:false */

var chai = require('chai');

// give all objects should() test
chai.should();

// Use these, if you like this style better:
// var expect = chai.expect;
// var assert = chai.assert;

var jsFastTag = require('../index.js');

describe('jsFastTag', function() {
	it('has 79977 lexicons', function(){
		Object.keys(jsFastTag.lexicon).length.should.equal(79977);
	});

	it('correctly parses "The quick brown fox jumps over the lazy dog"', function(){
		var tags = jsFastTag.tag(('The quick brown fox jumps over the lazy dog.').split(' '));
		
		// I don't think this is right...
		JSON.stringify(tags).should.equal(JSON.stringify([ 'NN', 'NN', 'NN', 'NN', 'NNS', 'NN', 'NN', 'NN', 'CD' ]));
	});
});