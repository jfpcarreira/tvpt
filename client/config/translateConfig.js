(function () {
	'use strict';

	angular
		.module('tvptApp')
		.config(setTranslation);

	function setTranslation($translateProvider) {
		$translateProvider
			.useSanitizeValueStrategy('sanitize')
			.useUrlLoader('/api/translate')
			.preferredLanguage('gb')
			.fallbackLanguage('gb');
	}

})();
