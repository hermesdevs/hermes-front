hermes.controller("single_switches_controller", function(
	$scope, 
	$resource,
	$http,
	$stateParams, 
	Progres,
	Query,
	materialize, 
	config
){


	Query.getUrl(config.databaseURL + config.switches + "/" + $stateParams.id);

	Query.getSingle(function(sw){
		$scope.switche = sw.data;
	});

	
});

