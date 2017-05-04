angular.module('tvptApp')
	.directive('sortableRows', function() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ngModel) {
				console.log('teste');
				element.sortable();
			}
		}
	});