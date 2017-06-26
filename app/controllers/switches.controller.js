hermes.controller("switches_controller", function($scope, Switches , materialize){

	Switches.getAll(function(equipos){
		$scope.equipos = equipos.data;
		$(".progress").addClass("hide");
		$(".loadnow").addClass("hide");
		$(".table__content").removeClass("hide");
	});
	
});

