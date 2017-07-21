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
		Query.killme(ruta);
	}

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

});

hermes.controller("switches_puertos_equipos", function($scope, Switches, $stateParams, Progres, Query, config ){

	var ruta = Switches.single + $stateParams.id + config.puertos;

	Query.getAll(ruta, function(puertosFrist){

		var puertos = new Array;

		var obtenerDatos = function(url) {
			$.ajax({
				url: url,
				success: function (success) {
					puertos.push(success.data);
				}
			});	
		}

		for (var i=0; i < puertosFrist.data.length; i++){
			obtenerDatos(config.databaseURL + config.puertos + "/" + puertosFrist.data[i].id + config.equipos);
		}
		
		var puertosEquipos = {
			"all": puertos
		}
		$scope.puertosEquipos = puertosEquipos.all;
	
	});

	$scope.PuertoEquipo = function(relation){
		Query.relation($stateParams.id, relation.element2, relation.element1);
	}

});