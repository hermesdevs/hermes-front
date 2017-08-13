hermes.controller("nav", function($scope, $window, Session){

	$scope.logout = function(){
		Session.destroyUser()
        $window.location.href="#/";
	}

});
