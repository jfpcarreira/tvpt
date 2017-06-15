(function () {
  'use	strict';

	angular
		.module('tvptApp')
		.controller('LoginController', controller);
	
	function controller($state) {
		var $loginCtrl = this;

		$loginCtrl.login = function () {
			alert("TODO");
			$state.go('admin.list');
		}
	}

})();
