(function () {
  'use	strict';

	angular
		.module('tvptApp')
		.directive('isolateClick', setIsolateClickDirective);

	function setIsolateClickDirective() {
		return {
			link: function (scope, elem) {
				elem.on('click', function (e) {
					e.stopPropagation();
				});
			}
		};
	}

})();
