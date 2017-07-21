hermes.controller("equipos_controller", function($scope, Query, Equipos, Progres){

	Query.getAll(Equipos.general, function(equipos){
		$scope.equipos = equipos.data;
		Progres.loaded();
	})
	
});

