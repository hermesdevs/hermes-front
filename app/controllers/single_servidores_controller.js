hermes.controller("single_servidores_controller", function($scope, $stateParams, Progres, Query, Servidores){

	var ruta = Servidores.single + $stateParams.id;

	Query.getAll(ruta, function(servidor){
		$scope.servidor = servidor.data;
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

