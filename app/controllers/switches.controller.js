hermes.controller("switches_controller", function($scope, Switches, Progres, Query){
	
	Query.getAll(Switches.general, function(switches){
		$scope.switches = switches.data;
		Progres.loaded();
	})
		
	$scope.crearSW = function(datos) {
		Query.sendNudes(Switches.general, datos);
	};
	
	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

	
});

