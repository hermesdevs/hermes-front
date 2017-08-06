hermes.controller("dashboard_controller", function(
	$scope, Progres, Query, Auth, Switches, Servidores, Equipos, Puertos){

	Auth.getUser(localStorage.id, function(user){
		$scope.user = user.data;
		$scope.user.active = true;
	})

	Query.getAll(Switches.general, function(switches){
		$scope.switches = switches.data;
		Progres.loaded();
	})

	Query.getAll(Servidores.general, function(servidores){
		$scope.servidores = servidores.data;
		Progres.loaded();
	})

	Query.getAll(Equipos.general, function(equipos){
		$scope.equipos = equipos.data;
		Progres.loaded();
	})

	Query.getAll(Puertos.general, function(puertos){
		$scope.puertos = puertos.data;
		Progres.loaded();
	})

	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

});