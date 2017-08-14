hermes.controller("nav", function($scope, $window, Session){

	$scope.typeUser = localStorage.super_permission;

	$scope.logout = function(){
		Session.destroyUser()
        $window.location.href="#/";
	}

});
