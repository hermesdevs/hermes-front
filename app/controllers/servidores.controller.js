hermes.controller("servidores_controller", function(
	$scope, 
	$location, 
	$window, 
	Progres,
	Query,
	config
){

	Query.getUrl(config.databaseURL + config.servidores);

	Query.getAll(function(servidores){
		$scope.servidores = servidores.data;
		Progres.loaded();
	})

	
});

