hermes.controller("single_switches_controller", function($scope, Switches, $stateParams, Progres, Query){
	
	var ruta = Switches.single + $stateParams.id;

	Query.getAll(ruta, function(sw){
		$scope.switche = sw.data;
		Progres.loaded();
	});
	
	$scope.update = function(datos) {
		Progres.progressloading();
		Query.updateDates(ruta, datos);
	}
	
	$scope.delete = function(){
		Progres.progressloading();
		var confirma = confirm("¿Quieres eliminar este Swtiche y todas sus conexiones?")
		if (confirma === true){
			Query.killme(ruta, Switches.home);			
		}
		else{
			console.log("Se cancelo la eliminacion del swtiche " + $stateParams.id)
		}
		Progres.loaded_single();
	}

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}
});
