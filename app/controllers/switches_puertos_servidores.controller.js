hermes.controller("switches_puertos_servidores", function($scope, Switches, $stateParams, Progres, Query, config ){

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

	var switcheEquipos = Switches.single + $stateParams.id + config.servidores;

	Query.getAll(switcheEquipos,
		function(servidor){			
			var servidores = new Array;
			var obtenerDatos = function(url) {
				var consulta = $.ajax({
					url: url,
					async: false,
					success: function (success) {
						servidores.push(success.data);
					}
				});
				return consulta;
			}

			for (var i=0; i < servidor.data.length; i++){
				obtenerDatos(config.databaseURL + config.servidores + "/" + servidor.data[i].id + config.puertos);
			}
			
			var servidoresPuertos = {
				"all": servidores
			}
			
			$scope.puertosServidores = servidoresPuertos.all;
			Progres.loaded_single("#servidoresload");

		},
		function(error){
			if (error.code === 404){
				var servidores = new Array;
				var servidoresPuertos = {
					"all": servidores
				}
				$scope.puertosServidores = servidoresPuertos.all;
				Progres.loaded_single("#servidoresload");		
			}
		}
	);


});


hermes.controller("add_servidores_switches", function($scope, $stateParams, config, Query, Progres){

	var switcheServidores = config.databaseURL + config.servidores + config.switches;

	Query.getAll(switcheServidores, function(servidoresConstructor){
		console.log("Servidores", servidoresConstructor);
		for (var i = 0; i < servidoresConstructor.length; i++){
			if (servidoresConstructor[i].switche != null) {
				$("#servidoresOptions").append("<option value=" + servidoresConstructor[i].id + " disabled>" + servidoresConstructor[i].name + "</option>");
			} else {
				$("#servidoresOptions").append("<option value=" + servidoresConstructor[i].id + ">" + servidoresConstructor[i].name + "</option>");					
			}
		}
	});

	$scope.PuertoServidor = function(relation){

		Progres.progressloading();

		Query.createRelation(config.databaseURL + config.switches + "/" + $stateParams.id + config.servidores + "/" + relation.element1,
			function(success){
    	    	Materialize.toast("El servidor se esta conectando al switche ...", 3000);
		        console.log(JSON.stringify(success.data));
		    } 
		);

		Query.createRelation(config.databaseURL + config.servidores + "/" + relation.element1 + config.puertos + "/" + relation.element2,
			function(success){
    	    	Materialize.toast("El servidor se conecto existosamente en el puerto " + relation.element2, 3000);
		        console.log(JSON.stringify(success.data));
		    } 
		);

		Progres.progressloaded();

	}

});


