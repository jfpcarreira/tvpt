angular.module('tvptApp')
	.directive('alphanumeric', function() {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				ctrl.$validators.alphanumeric = function(modelValue, viewValue) {
					var ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]*$/;

					// Consider valid empty or valid alphanumeric content
					return (ctrl.$isEmpty(modelValue) || ALPHANUMERIC_REGEX.test(viewValue));
				};
			}
		};
	});
