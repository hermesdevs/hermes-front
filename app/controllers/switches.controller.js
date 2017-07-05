hermes.controller("switches_controller", function(
	$scope, 
	$location, 
	$window, 
	Progres,
	Query,
	config
){

	Query.getUrl(config.databaseURL + config.switches);

	Query.getAll(function(switches){
		$scope.switches = switches.data;
		Progres.loaded();
	})

	Query.getUrl(config.databaseURL + config.equipos);

	Query.getAll(function(equipos){
		$scope.equipos = equipos.data;
		Progres.loaded();
	})

	$scope.sw = {};
	
	$scope.crearSW = function(datos) {
		Query.sendNudes(datos);
	};
	
});

