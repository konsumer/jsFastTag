module.exports = function(grunt) {
	'use strict';

	/**
	 * Parse a lexicon data file into a javascript object
	 * @param  string fname Lexicon file to read
	 * @return object       Lexicon object, keyed by word     
	 */
	var parseLexicon = function(fname){
		var regular = {};
		grunt.file.read(fname).split('\n').map(function(i){
			return i.split(' ');
		}).forEach(function(i){
			if (i[0]){
				regular[i[0].toLowerCase()] = i.splice(1);
			}
		});
		return regular;
	};

	/**
	 * Generate JSON files for easy import from text files in lexicon/
	 */
	grunt.registerTask('lexicon', 'Turn lexicon files into module', function() {
		grunt.file.write('lexicon/regular.js','module.exports=' + JSON.stringify(parseLexicon(__dirname + '/lexicon/regular.txt')) +  ';');
		grunt.file.write('lexicon/medical_plus_regular.js','module.exports=' + JSON.stringify(parseLexicon(__dirname + '/lexicon/medical_plus_regular.txt')) +  ';');
	});

	grunt.initConfig({
		'browserify': {
			'default': {
				'src': ['index.js'],
				'dest': 'dist/jsFastTag.js'
			}
		},
		
		'uglify': {
			'options': {},
			'default': {
				'files': {
					'dist/jsFastTag.min.js': ['dist/jsFastTag.js']
				}
			}
		},
		
		'clean': ['dist/', 'lexicon/*.js']
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean', 'lexicon', 'browserify', 'uglify']);
};