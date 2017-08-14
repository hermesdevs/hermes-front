hermes.controller("single_user_controller", function($scope, $stateParams, $window, User, Query , Progres){

	var ruta = User.single + $stateParams.id;

	Query.getAll(ruta, function(usuario){
		$scope.user = usuario.data;
		Progres.loaded();
	});
	
	$scope.updateInfoUser = function(datos) {
		Progres.progressloading();
		Query.updateDates(ruta, datos);
	}
	
	$scope.delete = function(){
		Progres.progressloading();
		var confirma = confirm("¿Quieres eliminar este Usuario y todas sus conexiones?")
		if (confirma === true){
			Query.killme(ruta, User.home);			
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