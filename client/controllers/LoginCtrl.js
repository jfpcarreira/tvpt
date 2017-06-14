angular.module('tvptApp')
	.controller('LoginController', function ($state) {
		var $loginCtrl = this;

		$loginCtrl.login = function () {
			alert("TODO");
			$state.go('admin.list');
		}

	});
