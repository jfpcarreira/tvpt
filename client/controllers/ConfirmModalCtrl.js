angular.module('tvptApp')
	.controller('ConfirmModalCtrl', function (toastr, $uibModalInstance, genParams, $sce) {
		var $cmCtrl = this;

		$cmCtrl.titleContent = $sce.trustAsHtml(genParams.titleContent);
		$cmCtrl.bodyContent = $sce.trustAsHtml(genParams.bodyContent);

		$cmCtrl.ok = function () {
			$uibModalInstance.close();
		};

		$cmCtrl.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	});
