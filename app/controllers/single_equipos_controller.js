hermes.controller("single_equipos_controller", function($scope, $stateParams, $location, $window, Progres, Query, materialize, config ){

	Query.getUrl(config.databaseURL + config.equipos + "/" + $stateParams.id);
	
	Query.getAll(function(equipo){
		$scope.equipo = equipo.data;
		console.log(equipo.data);
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





