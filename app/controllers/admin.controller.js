hermes.controller("admin_controller", function($scope, $window, User, Query , Progres, Auth){

	Query.getAll(User.general, function(usuarios){
		$scope.usuarios = usuarios.data;
		Progres.loaded();
	})

	function randomString(){
		// body...
		var text = " ";
		var posissible = "ABCDFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz";

		for (var i = 0; i < 32; i++) 
			text += posissible.charAt(Math.floor(Math.random() * posissible.length));
		
		return text;
	}
	
	$scope.userRegister = {
		"super_permission": 0,
		"remember_token": randomString()	
	};
		
	$scope.AuthRegister = function(user){
		Progres.progressloading();
		Auth.registerUser($scope.userRegister);
        document.getElementById("quickstart-sign-up").disabled = true;
	};
	
	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}


});
