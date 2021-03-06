'use strict';

module.exports = {
	dev: {
		'APP_NAME' : 'App dev',
		'URL' : 'DEV'
	},
	test: {
		'APP_NAME' : 'App test',
		'URL' : 'Test'
	},
	prod: {
		'APP_NAME' : 'App prod',
		'URL' : 'Prod'
	},
	template: '(function () {\n' +
				  '    \'use strict\';\n' +
				  '    // DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n' +
				  '    angular\n' +
				  '        .module(\'<%- moduleName %>\')\n' +
				  '<% constants.forEach(function(constant) { %>        .constant(\'<%- constant.name %>\', <%= constant.value %>)\n<% }) %>;\n' +
				  '})();\n'
}