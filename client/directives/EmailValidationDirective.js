(function () {
  'use	strict';

	angular
		.module('tvptApp')
		.directive('email', setEmailDirective);

	function setEmailDirective() {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				ctrl.$validators.email = function(modelValue, viewValue) {
					var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

					// Consider valid empty or valid email
					if (ctrl.$isEmpty(modelValue) || EMAIL_REGEX.test(viewValue)) {
						return true;
					}

					return false;
				};
			}
		};
	}

})();
