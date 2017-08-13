hermes.controller("switches_puertos_equipos", function($scope, Switches, $stateParams, Progres, Query, config ){

	//1 agregarlos los equipos de este swtiche y listarlos
	//1.1 agregar los puertos a los equipos de este swithce 
	//2 pedir los equipos de este swtiche y listarlos

	var switcheEquipos = Switches.single + $stateParams.id + config.equipos;

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


	Query.getAll(switcheEquipos, function(equiposContent){			
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

			for (var i=0; i < equiposContent.data.length; i++){
				obtenerDatos(config.databaseURL + config.equipos + "/" + equiposContent.data[i].id + config.puertos);
			}
			
			var equiposPuertos = {
				"all": equipos
			}
			
			console.log(equipos);

			$scope.equiposPuertos = equiposPuertos.all;
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

});

hermes.controller("add_equipos_switches", function($scope, $stateParams, Switches, Equipos, config, Query, Progres){

	var switcheEquipos = Switches.single + $stateParams.id + config.equipos;
	
	Query.getAll(Equipos.general, function(equipos){
		Query.getAll(switcheEquipos, function(equiposDeEsteSwitche){
	
			var equiposConstructor = new Array;

			var listarEquiposPorDefecto = function(device){
				var equiposPorDefecto = equiposConstructor.push(device);
				return equiposPorDefecto;
			}

			for (var i = 0; i < equipos.data.length; i++) {
				for (var y = 0; y < equiposDeEsteSwitche.data.length; y++) { 
					if (equipos.data[i].id === equiposDeEsteSwitche.data[y].id) {
						// console.log("El equipo " + equipos.data[i].id + " es igual al equipo " + equiposDeEsteSwitche.data[y].id)
						equipos.data[i].disabled = true;							
					} else {
						// console.log("El equipo " + equipos.data[i].id + " es distinto al equipo " + equiposDeEsteSwitche.data[y].id)
					}
				}
				listarEquiposPorDefecto(equipos.data[i]);
			}
			
			for (var i = 0; i < equiposConstructor.length; i++){
				if (equiposConstructor[i].disabled) {
					$("#equiposOptions").append("<option value=" + equiposConstructor[i].id + " disabled>" + equiposConstructor[i].name + "</option>");
				} else {
					$("#equiposOptions").append("<option value=" + equiposConstructor[i].id + ">" + equiposConstructor[i].name + "</option>");					
				}
			}

		});
	});

	for (var p = 1; p < 49; p++){
		$("#puertosOptions").append("<option value=" + p + "> Puerto fa0/" + p + "</option>");
	}

	$scope.PuertoEquipo = function(relation){
		Progres.progressloading();
		Query.createRelation($stateParams.id, relation.element1);
	}

});
