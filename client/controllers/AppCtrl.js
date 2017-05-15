angular.module('tvptApp')
	.controller('AppController', function (toastr, $uibModal, $translate) {
		var $appCtrl = this;

		// Default items on the list
		$appCtrl.clients = [
			{
				name: "João Carreira",
				username: "J6F59dKy2F",
				password: "kh87STfshk",
				userSogra: "oMeuUserSogra",
				passSogra: "minhaPassSogra",
				email: "jfpcarreira@gmail.com",
				address: "8119 Avenue des Belges, H2P2A8, Montréal",
				phone: 5146627755,
				services: [
					{
						name: "TV da Sogra",
						price: 200
					},
					{
						name: "Raspberry PI",
						price: 80
					},
					{
						name: "SD Card",
						price: 30
					}
				],
				registrationDate: Date.now,
				expirationDate: new Date().setFullYear(new Date().getFullYear() + 1),
				isActive: true
			},
			{
				name: "Marina Pombo",
				username: "H7skhFfdJG",
				password: "POajB6FJ9D",
				userSogra: "marinaUserSogra",
				passSogra: "marinaPassSogra",
				email: "maroo9ster@gmail.com",
				address: "8119 Avenue des Belges, H2P2A8, Montréal",
				phone: 5144587412,
				services: [
					{
						name: "TV da Sogra",
						price: 200
					}
				],
				registrationDate: Date.now,
				expirationDate: new Date().setFullYear(new Date().getFullYear() + 1),
				isActive: true
			}
		];

		// Opens modal for new client
		$appCtrl.newClient = function () {
			$uibModal.open({
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'newClientModal.html',
				controller: 'NewClientModalCtrl',
				controllerAs: '$ncm'
			})
				.result.then(function (newClient) {
					$appCtrl.clients.push(newClient);
				}, function () {
					console.log('Carreguei no Cancel do promisse');
				});
		}

		//Opens a confirm modal to delete a client
		$appCtrl.deleteClient = function (client) {
			var params = {
				contextObj: client,
				titleContent: 'Delete client',
				bodyContent: 'Are you sure you want to delete this client: <b>' + client.name + '</b>?',
				onSuccess: function (clientToDelete) {
					$appCtrl.clients.splice($appCtrl.clients.indexOf(clientToDelete), 1);
				},
				onCancel: function (clientNotToDelete) {
					console.log('User pressed cancel');
				}
			};

			newConfirm(params);
		}

		/**
			Generic private method to create a confirm modal. Receives the following parameter:

			var params = {
				contextObj:			The context object that will be passed to the onSuccess and onCancel functions
				titleContent: 	The title that will be shown on the modal
				bodyContent: 		The content that will be shown on the modal
				onSuccess: 			The function that will be executed when user press OK button
				onCancel: 			The function that will be executed when user press CANCEL button
		*/
		function newConfirm(params) {
			$uibModal.open({
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'confirmModal.html',
				controller: 'ConfirmModalCtrl',
				controllerAs: '$cm',
				resolve: {
					genParams: params
				}
			})
			.result.then(function () {
				params.onSuccess(params.contextObj);
			}, function () {
				params.onCancel(params.contextObj);
			});
		}

		// Changes the i18n language in use
		$appCtrl.changeLang = function (lang) {
			$translate.use(lang);
		}

		// Returns the CSS flag corresponding to the current locale
		$appCtrl.getFlagCss = function () {
			return 'flag-icon flag-icon-' + $translate.use();
		}

		// TODO: Delete this method
		$appCtrl.todo = function () {
			alert('TODO');
		}
	});
