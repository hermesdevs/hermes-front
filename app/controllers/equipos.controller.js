hermes.controller("equipos_controller", function($scope, Equipos , materialize){

	Equipos.getAll(function(equipos){
		$scope.equipos = equipos.data;
		$(".progress").addClass("hide");
		$(".loadnow").addClass("hide");
		$(".table__content").removeClass("hide");
	})
	
});

