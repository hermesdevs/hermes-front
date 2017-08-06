hermes.controller("login_controller", function($scope, Auth, Progres){
	    	
	$scope.AuthLogin = function(user) {
		Progres.progressloading();
	    Auth.login(user);
        document.getElementById("quickstart-sign-in").disabled = true;
	}

});
