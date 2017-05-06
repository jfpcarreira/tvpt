angular.module('tvptApp')
	.config(['$translateProvider', function ($translateProvider) {
		$translateProvider
			.useSanitizeValueStrategy('sanitize')
			.useUrlLoader('/translate')
			.preferredLanguage('gb')
			.fallbackLanguage('gb');
	}]);
