hermes.controller("nav", function($scope,$window, Session){
	
	$scope.logout = function(){
		localStorage.removeItem("id");
        $window.location.href="#/";
	}

});
