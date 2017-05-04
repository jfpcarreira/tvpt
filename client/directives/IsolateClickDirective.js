angular.module('tvptApp')
	.directive('isolateClick', function () {
		return {
			link: function (scope, elem) {
				elem.on('click', function (e) {
					e.stopPropagation();
				});
			}
		};
	});
