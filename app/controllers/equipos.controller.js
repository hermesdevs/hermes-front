hermes.controller("equipos_controller", function($scope, Query, Equipos, Progres){

	Query.getAll(Equipos.general, function(equipos){
		$scope.equipos = equipos.data;
		Progres.loaded();
	})

	$scope.equipo = {};
		
	$scope.crearEquipos = function(datos) {
		Query.sendNudes(Equipos.general, datos);
	};
	
	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

});

