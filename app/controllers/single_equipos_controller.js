hermes.controller("single_equipos_controller", function($scope, Query, Equipos, $stateParams, Progres){

	Query.getAll(Equipos.single, function(equipo){
		$scope.equipo = equipo.data;
		Progres.loaded();
	});

	$scope.update = function(datos) {
		Progres.progressloading();
		Query.updateDates(Equipos.single, datos);
	}
	
	$scope.delete = function(){
		Progres.progressloading();
		Query.killme(Equipos.single);
	}

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}
	
});





