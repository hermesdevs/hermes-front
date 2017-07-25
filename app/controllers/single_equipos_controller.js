hermes.controller("single_equipos_controller", function($scope, Query, Equipos, $stateParams, Progres){

	var ruta = Equipos.single + $stateParams.id;

	Query.getAll(ruta, function(equipo){
		$scope.equipo = equipo.data;
		Progres.loaded();
	});

	$scope.update = function(datos) {
		Progres.progressloading();
		Query.updateDates(ruta, datos);
	}
	
	$scope.delete = function(){
		Progres.progressloading();
		Query.killme(ruta);
	}

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}
	
});





