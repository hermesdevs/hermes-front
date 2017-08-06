hermes.controller("profile_controller", function($scope, Progres, Auth){

	Auth.getUser(localStorage.id, function(user){
		$scope.user = user.data;
		$scope.user.active = true;
		Progres.loaded();
	})

	$scope.updateInfoUser = function (datos) {
		Auth.updateUser(localStorage.id, datos);
		Progres.loaded();
	}

});

