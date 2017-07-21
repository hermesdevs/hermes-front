hermes.controller("register_controller", function($scope, Progres, Auth, $location, Query,config){

	
	function randomString(){
		// body...
		var text = " ";
		var posissible = "ABCDFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz";

		for (var i = 0; i < 32; i++) 
			text += posissible.charAt(Math.floor(Math.random() * posissible.length));
		
		return text;
	}
	
	$scope.user = {
		"super_permission": 0,
		"remember_token": randomString()	
	};

	$scope.resgiterUser = function(user) {
		Progres.progressloading();
		Auth.register($scope.user);
		Progres.loaded();
	};

	// for (var i = 1; i < 1000; i++) {
	// 	Query.getUrl(config.databaseURL + config.usuarios + "/" + i);
	// 	Query.killme();
	// 	console.log("Eliminado el usuario"+i);
	// }


});
