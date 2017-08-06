hermes.controller("switches_puertos_equipos", function($scope, Switches, $stateParams, Progres, Query, config ){

	var ruta = Switches.single + $stateParams.id + config.puertos;

	Query.getAll(ruta,
		function(puertosFrist){
			
			var puertos = new Array;

			var obtenerDatos = function(url) {
				var consulta = $.ajax({
					url: url,
					async: false,
					success: function (success) {
						puertos.push(success.data);
					}
				});	
				return consulta;
			}


			for (var i=0; i < puertosFrist.data.length; i++){
				obtenerDatos(config.databaseURL + config.puertos + "/" + puertosFrist.data[i].id + config.equipos);
			}

			
			var puertosEquipos = {
				"all": puertos
			}
			$scope.puertosEquipos = puertosEquipos.all;
			Progres.loaded_single("#equiposload");

		}, 
		function(error){
			if (error.code === 404){
				var puertos = new Array;
				var puertosEquipos = {
					"all": puertos
				}
				$scope.puertosEquipos = puertosEquipos.all;
				Progres.loaded_single("#equiposload");		
			}
		}
	);


	$scope.delete_relation= function(puerto, equipo){
		Progres.progressloading();
		var confirma = confirm("¿Quieres eliminar esta conexion?")
		if (confirma === true){
			console.log(puerto);
			console.log(equipo);
			// Query.relationKill($stateParams.id, puerto, equipo);			
		}
		else{
			console.log("Se cancelo la eliminacion de la relacion " + $stateParams.id)
		}
		Progres.loaded();
	}

});

hermes.controller("add_equipos_switches", function($scope, $stateParams, Equipos, Query, Progres){

	Query.getAll(Equipos.general, function(equipos){
		for (var i = 0; i < equipos.data.length ; i++){
			$("#equiposOptions").append("<option value=" + equipos.data[i].id + ">" + equipos.data[i].name + "</option>");
		}

		for (var i = 0; i < 49; i++){
			$("#puertosOptions").append("<option value=" + i + "> Puerto fa0/" + i + "</option>");
		}
	});

	$scope.PuertoEquipo = function(relation){
		Progres.progressloading();
		Query.relation($stateParams.id, relation.element2, relation.element1);
	}

});
