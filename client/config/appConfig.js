angular.module('tvptApp')
	.config(['$translateProvider', function ($translateProvider) {
		$translateProvider
			.useSanitizeValueStrategy('sanitize')
			.useUrlLoader('/api/translate')
			.preferredLanguage('gb')
			.fallbackLanguage('gb');
	}]);
