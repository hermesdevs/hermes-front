hermes.controller("servidores_controller", function($scope, Progres, Servidores, Query ){

	Query.getAll(Servidores.general, function(servidores){
		$scope.servidores = servidores.data;
		Progres.loaded();
	})

	$scope.servidor = {};
		
	$scope.crearServidor = function(datos) {
		Query.sendNudes(Servidores.general, datos);
	};
	
	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

});

