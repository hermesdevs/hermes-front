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


hermes.controller("puertos_validate", function($scope, Switches, Equipos, Servidores, $stateParams, Progres, Query, config){

	for (var p = 1; p < 49; p++){
		$("#puertosOptions").append("<option value=" + p + "> Puerto fa0/" + p + "</option>");
	}

	var switcheEquipos = Switches.single + $stateParams.id + config.equipos;
	
	Query.getAll(switcheEquipos, 
		function(equipo){			
			var equipos = new Array;
			var obtenerDatos = function(url) {
				var consulta = $.ajax({
					url: url,
					async: false,
					success: function (success) {
						equipos.push(success.data);
					}
				});	
				return consulta;
			}

			for (var i=0; i < equipo.data.length; i++){
				obtenerDatos(config.databaseURL + config.equipos + "/" + equipo.data[i].id + config.puertos);
			}
						
			console.log("Equipos validate", equipos);
	});

});
