hermes.controller("equipos_controller", function($scope, Query, Progres, config){

	Query.getUrl(config.databaseURL + config.equipos);

	Query.getAll(function(equipos){
		$scope.equipos = equipos.data;
		Progres.loaded();
	})
	
});

