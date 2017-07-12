hermes.controller("single_switches_controller", function(
	$scope, 
	$http,
	$stateParams, 
	$location, 
	$window, 
	Progres,
	Query,
	materialize, 
	config
){

	// Informacion del switche 
	Query.getUrl(config.databaseURL + config.switches + "/" + $stateParams.id);

	Query.getAll(function(sw){
		$scope.switche = sw;
		Progres.loaded();
	});

	$scope.update = function(datos) {
		Progres.progressloading();
		Query.updateDates(datos);
	}
	
	$scope.delete = function(){
		Progres.progressloading();
		Query.killme();
	}

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}
	
});