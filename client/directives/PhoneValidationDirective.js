angular.module('tvptApp')
	.directive('phone', function() {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				ctrl.$validators.phone = function(modelValue, viewValue) {
					var CANADA_PHONE_REGEX = /^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*$/;

					// Consider valid empty or valid canadian phone
					return (ctrl.$isEmpty(modelValue) || CANADA_PHONE_REGEX.test(viewValue));
				};
			}
		};
	});
