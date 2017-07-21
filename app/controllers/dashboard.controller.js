hermes.controller("dashboard_controller", function(
	$scope, 
	$location, 
	$window, 
	Progres, 
	Query, 
	materialize, 
	config, 
	Session, 
	Auth
){

	// estableciendo la session
	Auth.getUser(function(user){
		$scope.user = user.data;
		$scope.user.active = true;
	})

	// Obteniendo datos de recursos
	Query.getUrl(config.databaseURL + config.switches);

	Query.getAll(function(switches){
		$scope.switches = switches.data;
		Progres.loaded();
	})

	Query.getUrl(config.databaseURL + config.servidores);

	Query.getAll(function(servidores){
		$scope.servidores = servidores.data;
		Progres.loaded();
	})

	Query.getUrl(config.databaseURL + config.equipos);

	Query.getAll(function(equipos){
		$scope.equipos = equipos.data;
		Progres.loaded();
	})

	Query.getUrl(config.databaseURL + config.puertos);

	Query.getAll(function(puertos){
		$scope.puertos = puertos.data;
		Progres.loaded();
	})

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

	
});



