angular.module('tvptApp')
	.controller('NewClientModalCtrl', function (toastr, $uibModalInstance) {
		var $ncmCtrl = this;

		$ncmCtrl.regDate = new Date();

		$ncmCtrl.servicesList = [
			{
				name: "TV da Sogra",
				isChecked: true,
				isDisabled: true,
				price: 200
			},
			{
				name: "Raspberry PI",
				isChecked: false,
				isDisabled: false,
				price: 80
			},
			{
				name: "SD Card",
				isChecked: false,
				isDisabled: false,
				price: 30
			},
			{
				name: "Power suply",
				isChecked: false,
				isDisabled: false,
				price: 10
			},
			{
				name: "HDMI cable",
				isChecked: false,
				isDisabled: false,
				price: 10
			},
			{
				name: "RJ-45 cable",
				isChecked: false,
				isDisabled: false,
				price: 5
			}
		];

		$ncmCtrl.ok = function () {
			var newClient = {
				name:				$ncmCtrl.name,
				username: 			"ABC",
				password: 			"123",
				userSogra: 			$ncmCtrl.userSogra,
				passSogra: 			$ncmCtrl.passSogra,
				email: 				$ncmCtrl.email,
				address: 			$ncmCtrl.address,
				phone: 				$ncmCtrl.phone,
				services: 			getSelectedServices(),
				registrationDate: 	$ncmCtrl.regDate,
				expirationDate: 	new Date($ncmCtrl.regDate).setFullYear(new Date($ncmCtrl.regDate).getFullYear() + 1),
				isActive: 			true
			};

			$uibModalInstance.close(newClient);
		};

		$ncmCtrl.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};

		function getSelectedServices() {
			var resultado = [];
			$ncmCtrl.servicesList.forEach(function (service) {
				if (service.isChecked) {
					delete service.isChecked;
					resultado.push(service);
				}
			});
			return resultado;
		}

		$ncmCtrl.formTotalErrors = function (obj) {
			var totalErrors = 0;
			angular.forEach(obj, function (value, key) {
				totalErrors += value.length;
			});
			return {
				total: totalErrors,
				message: "Form contains " + totalErrors + " errors. Please correct them before proceding"
			};
		};

	});
