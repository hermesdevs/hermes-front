hermes.controller("single_equipos_controller", function(
	$scope, 
	$resource,
	$http,
	$stateParams, 
	$location, 
	$window, 
	Progres,
	Query,
	materialize, 
	config
){

	Query.getUrl(config.databaseURL + config.switches + "/" + $stateParams.id);

	Query.getSingle(function(sw){
		$scope.switche = sw.data;
	});

	$scope.delete = function() {
		Query.killme(config.databaseURL + config.switches + "/" + $stateParams.id);
    	Materialize.toast('El Switche se esta eliminando', 4000);
		$window.location.href="#/switches";
	}
	
});

