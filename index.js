'use strict';

var fastTag = {
	'lexicon': require(__dirname + '/lexicon/regular.js'),
};

/**
 * Private: Get initial lexicon for a given word
 * @param string word
 * @return true if the input word is in the lexicon, otherwise return false
 */
var getLexicon = function(word){
	return fastTag.lexicon[Object.keys(fastTag.lexicon).indexOf(word.toLowerCase())];
};

var isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Check if a word is in lexicon
 * @param string word
 * @return true if the input word is in the lexicon, otherwise return false
 */
fastTag.wordInLexicon = function(word){
	return (fastTag.lexicon.indexOf(word.toLowerCase()) !== -1);
};

/**
 * Get a list of tags for a list of words in a sentence
 * @param  array words  list of strings to tag with parts of speech
 * @return array        list of strings for part of speech tokens
 */
fastTag.tag = function(words){
	var ret = [];

	words.forEach(function(word, i){
		var ss  = getLexicon(word);
		if (!ss){
			if (word.length === 1){
				ret.push(word + '^');
			}else{
				ret.push('NN');
			}
		}else{
			ret.push(ss[0]);
		}
		words[i] = word.toLowerCase();
	});

	// Apply transformational rules
	ret.forEach(function(r, i){
		// rule 1: DT, {VBD | VBP} --> DT, NN
		if (i > 0 && ret[i-1] === 'DT') {
			if (r === 'VBD' || r === 'VBP' || r === 'VB') {
				ret[i] = 'NN';
			}
		}

		// rule 2: convert a noun to a number (CD) if "." appears in the word
		if (r[0] === 'N'){
			if (words[i].indexOf('.') !== -1 && isNumber(words[i])) {
				ret[i] = 'CD';
			}
			// did I do enough here?
		}

		// rule 3: convert a noun to a past participle if words[i] ends with "ed"
		if (r[0] === 'N' && words[i].slice(-2) === 'ed'){
			ret[i] = 'VBN';
		}

		// rule 4: convert any type to adverb if it ends in "ly";
		if (words[i].slice(-2) === 'ly'){
			ret[i] = 'RB';
		}

		// rule 5: convert a common noun (NN or NNS) to a adjective if it ends with "al"
		if (r.slice(0,2) === 'NN' && words[i].slice(-2) === 'al'){
			ret[i] = 'JJ';
		}

		// rule 6: convert a noun to a verb if the preceeding work is "would"
		if (i > 0 && r.slice(0,2) === 'NN' && words[i - 1] === 'would'){
			ret[i] = 'VB';
		}

		// rule 7: if a word has been categorized as a common noun and it ends with "s",
		// then set its type to plural common noun (NNS)
		if (r === 'NN' && words[i].slice(-1) === 's'){
			ret[i] = 'NNS';
		}

		// rule 8: convert a common noun to a present participle verb (i.e., a gerand)
		if (r.slice(0,2) === 'NN' && words[i].slice(-3) === 'ing'){
			ret[i] = 'VBG';
		}
	});

	return ret;
};

module.exports = fastTag;
