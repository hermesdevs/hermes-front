hermes.controller("switches_controller", function(
	$scope, 
	$resource,
	$http, 
	Progres,
	Switches, 
	Equipos, 
	materialize, 
	config
){

	Switches.getAll(function(sw){
		$scope.switches = sw.data;
	});

	Equipos.getAll(function(eq){
		$scope.equipos = eq.data;
	});

	$scope.sw = {};
	
	$scope.crearSW = function(datos) {
		Switches.sendNudes(function(datos){
	    	Materialize.toast('Tu switche se esta creando', 4000);
		});
	};
	
});

