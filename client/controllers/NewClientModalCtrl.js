angular.module('tvptApp')
	.controller('NewClientModalCtrl', function ($uibModalInstance, toastr, ServicesService) {
		var $ncmCtrl = this;

		$ncmCtrl.regDate = new Date();

		// Initializes the list of services
		$ncmCtrl.preLoadServices = function () {
			ServicesService.getAll()
				.then(function(response) {
					$ncmCtrl.servicesList = response;
				}, function(response) {
					toastr.error('Error getting the list of services');
				});
		}

		$ncmCtrl.servicesTotal = function () {
			if($ncmCtrl.servicesList != undefined) {
				var total = 0;
				$ncmCtrl.servicesList.forEach(function (service) {
					if (service.is_selected) {
						total += service.price.amount;
					}
				});
				return total;
			}
		}

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
