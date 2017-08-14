hermes.controller("register_admin_controller", function($scope, Progres, Auth){

	function randomString(){
		// body...
		var text = " ";
		var posissible = "ABCDFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz";

		for (var i = 0; i < 32; i++) 
			text += posissible.charAt(Math.floor(Math.random() * posissible.length));
		
		return text;
	}
	
	$scope.user = {
		"super_permission": 1,
		"remember_token": randomString()	
	};

	$scope.AuthRegister = function(user){
		Progres.progressloading();
		Auth.register($scope.user);
        document.getElementById("quickstart-sign-up").disabled = true;
	};

});
