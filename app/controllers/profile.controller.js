hermes.controller("profile_controller", function(
	$scope, 
	$location, 
	$window, 
	Progres,
	Session,
	Auth,
	Query,
	config
){

	Auth.getUser(function(user){
		$scope.user = user.data;
		$scope.user.active = true;
	})

	$scope.updateInfoUser = function (datos) {
		Auth.updateUser(datos);
	}

});

