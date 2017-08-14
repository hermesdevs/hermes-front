hermes.controller("switches_puertos_equipos", function($scope, Switches, $stateParams, Progres, Query, config){

	//1 agregarlos los equipos de este swtiche y listarlos
	//1.1 agregar los puertos a los equipos de este swithce 
	//2 pedir los equipos de este swtiche y listarlos

	$scope.delete_relation= function(puerto, equipo){
		Progres.progressloading();
		var confirma = confirm("¿Quieres eliminar esta conexion?")
		if (confirma === true){
			console.log(puerto);
			console.log(equipo);				
			Query.fatality(config.databaseURL + config.switches + "/" + $stateParams.id + config.equipos + "/" + equipo,
				function(success){
	    	    	Materialize.toast("El equipo se esta desconectando del switche ...", 3000);
			        console.log(JSON.stringify(success.data));
			    } 
			);
			Query.fatality(config.databaseURL + config.equipos + "/" + equipo + config.puertos + "/" + puerto,
				function(success){
	    	    	Materialize.toast("El equipo se desenlazo correctamente", 3000);
			        console.log(JSON.stringify(success.data));
			    } 
			);

			// Query.relationKill($stateParams.id, puerto, equipo);			
		}
		else{
			console.log("Se cancelo la eliminacion de la relacion " + $stateParams.id)
		}
		Progres.loaded();
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
			
			var equiposPuertos = {
				"all": equipos
			}
			
			console.log("Equipos", equipos);

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

	var switcheEquipos = config.databaseURL + config.equipos + config.switches;

	Query.getAll(switcheEquipos, function(equiposConstructor){				
		// console.log(equiposConstructor)
		for (var i = 0; i < equiposConstructor.length; i++){
			// console.log(equiposConstructor[i].switche);
			if (equiposConstructor[i].switche.length > 0) {
				$("#equiposOptions").append("<option value=" + equiposConstructor[i].id + " disabled>" + equiposConstructor[i].name + "</option>");
			} else {
				$("#equiposOptions").append("<option value=" + equiposConstructor[i].id + ">" + equiposConstructor[i].name + "</option>");					
			}
		}

	});

	// var switcheEquipos = Switches.single + $stateParams.id + config.equipos;
	
	// Query.getAll(Equipos.general, function(equipos){
	// 	Query.getAll(switcheEquipos, function(equiposDeEsteSwitche){
	
	// 		var equiposConstructor = new Array;

	// 		var listarEquiposPorDefecto = function(device){
	// 			var equiposPorDefecto = equiposConstructor.push(device);
	// 			return equiposPorDefecto;
	// 		}

	// 		for (var i = 0; i < equipos.data.length; i++) {
	// 			for (var y = 0; y < equiposDeEsteSwitche.data.length; y++) { 
	// 				if (equipos.data[i].id === equiposDeEsteSwitche.data[y].id) {
	// 					// console.log("El equipo " + equipos.data[i].id + " es igual al equipo " + equiposDeEsteSwitche.data[y].id)
	// 					equipos.data[i].disabled = true;							
	// 				} else {
	// 					// console.log("El equipo " + equipos.data[i].id + " es distinto al equipo " + equiposDeEsteSwitche.data[y].id)
	// 				}
	// 			}
	// 			listarEquiposPorDefecto(equipos.data[i]);
	// 		}
			
	// 		// for (var i = 0; i < equiposConstructor.length; i++){
	// 		// 	if (equiposConstructor[i].disabled) {
	// 		// 		$("#equiposOptions").append("<option value=" + equiposConstructor[i].id + " disabled>" + equiposConstructor[i].name + "</option>");
	// 		// 	} else {
	// 		// 		$("#equiposOptions").append("<option value=" + equiposConstructor[i].id + ">" + equiposConstructor[i].name + "</option>");					
	// 		// 	}
	// 		// }

	// 	});
	// });

	for (var p = 1; p < 49; p++){
		$("#puertosOptions").append("<option value=" + p + "> Puerto fa0/" + p + "</option>");
	}



	$scope.PuertoEquipo = function(relation){
		Progres.progressloading();
		//1 agregar el equipos al swtiche (con el id del sw y el id del equipo) / si esta disponible 	
		Query.createRelation(config.databaseURL + config.switches + "/" + $stateParams.id + config.equipos + "/" + relation.element1, 		    
			function(success){
    	    	Materialize.toast("El equipo se esta conectando al switche ...", 3000);
		        console.log(JSON.stringify(success.data));
		    } 
		);

		//2 "crear" el puerto (si no existe) / agregar (activar pues) el puerto al equipo // un puerto puede tener varios equipos pero no el mismo equipo
		Query.createRelation(config.databaseURL + config.equipos + "/" + relation.element1 + config.puertos + "/" + relation.element2,
			function(success){
    	    	Materialize.toast("El equipo se conecto existosamente en el puerto " + relation.element2, 3000);
		        console.log(JSON.stringify(success.data));
		    } 
		);
	}

});
