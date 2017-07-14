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
	
	Query.getUrl(config.databaseURL + config.switches + "/" + $stateParams.id + config.puertos);

	Query.getAll(function(puertos){
		Query.getUrl(config.databaseURL + config.puertos + "/" + puertos.data[0].pivot.puerto_id + config.equipos);
		Query.getAll(function(equipos){
			console.log(equipos);
			$scope.equiposPuerto = equipos.data.equipo;
			$scope.puertoEquipo = equipos;
		});		

		// veo los puertos
		$scope.SwPuertos = puertos.data;
	});


});