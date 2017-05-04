angular.module('tvptApp')
	.config(['$translateProvider', function ($translateProvider) {
		$translateProvider
			.useSanitizeValueStrategy('sanitize')
			.useUrlLoader('/translate')
			.preferredLanguage('en')
			.fallbackLanguage('en');
	}]);
