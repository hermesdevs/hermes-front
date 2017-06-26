hermes.controller("servidores_controller", function($scope, Servidores, materialize){

	Servidores.getAll(function(equipos){
		$scope.equipos = equipos.data;
		$(".progress").addClass("hide");
		$(".loadnow").addClass("hide");
		$(".table__content").removeClass("hide");
	});
	
});

