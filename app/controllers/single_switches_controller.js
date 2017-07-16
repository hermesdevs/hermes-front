hermes.controller("single_switches_controller", function($scope, $http, $stateParams, $location, $window, Progres, Query, materialize, config ){
	
	// Busco la url del switche  
	Query.getUrl(config.databaseURL + config.switches + "/" + $stateParams.id);

	// Pido informacion del switche con la url de arriba 
	Query.getAll(function(sw){
		// Conecto estos datos en un modelo para llevarlos a la vista
		$scope.switche = sw.data;
		// Acitvo el evento para dejar de mostrar elementos de espera
		Progres.loaded();

		// Con la url del Swtiche ahora busco los puertos que estan "activos" de este switche
		Query.getUrl(config.databaseURL + config.switches + "/" + $stateParams.id + config.puertos);

		Query.getAll(function(puertos){
			// Conecto los puertos con la vista 
			// $scope.puertos = puertos.data;

			// Regreso los puertos conectados a este switche a la consola pos pa verlos nada mas
			// console.log(puertos.data)

			// Con el buble voy a iterar en cada uno de los puertos "activos" de este switche para buscar los equipos que le pertenecen 
			for (var i=0; i < puertos.data.length; i++) {			
				Query.getUrl(config.databaseURL + config.puertos + "/" + puertos.data[i].id + config.equipos);
				Query.getAll(function(equipos){
					$("#puerto").append('<p>' +  equipos.data.name + '</p>');
					for (var i=0; i < equipos.data.equipo.length; i++) {			
						$("#equipo").append('<p>' +  equipos.data.equipo[i].name + '</p>');
					}
				});

			}

		});

	});

	$scope.update = function(datos) {
		Progres.progressloading();
		Query.updateDates(datos);
	}
	
	$scope.delete = function(){
		Progres.progressloading();
		Query.killme();
	}

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

	// Query.getUrl(config.databaseURL + config.equipos);

	// Query.getAll(function(equipos){
	// 	$scope.equipos = equipos.data;
	// 	Progres.loaded();
	// });



});