hermes.controller("switches_puertos_servidores", function($scope, Switches, $stateParams, Progres, Query, config ){

	var ruta = Switches.single + $stateParams.id + config.puertos;
	
	Query.getAll(ruta, function(puertosFrist){

		var puertos = new Array;

		var obtenerDatos = function(url) {
			var consulta = $.ajax({
				url: url,
				async: false,
				success: function (success) {
					puertos.push(success.data);
				},
				error: function(error){
					console.log("El puerto no tiene servidores asignados");
				}
			});	
			return consulta;
		}

		for (var i=0; i < puertosFrist.data.length; i++){
			obtenerDatos(config.databaseURL + config.puertos + "/" + puertosFrist.data[i].id + config.servidores);
		}
		
		var puertosServidores = {
			"all": puertos
		}

		$scope.puertosServidores = puertosServidores.all;

		Progres.loaded_single();
	});
});

