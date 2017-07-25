hermes.service("Progres", function(){

	this.progressloading = function(argument) {
		// Activar barras de progreso
		$(".progress-update").removeClass("hide");
	}

	this.progressloaded = function(argument) {
		// Descarivar barras de progreso
		$(".progress-update").addClass("hide");
	}

	this.loaded = function(argument) {
		// cargando una solicitud de GET
		// mientras cargan los recursos
		$(".load").addClass("hide");
		$(".table__content").removeClass("hide");
		
		// Activar botones
		$(".btn").removeClass("disabled");
		
		// Barras de progreso
		// Desactivar barras de progreso
		$(".progress-load").addClass("hide");
	}

	this.loaded_single = function(){
		$(".progress-load-sigle").addClass("hide");
	}

	this.itsClear = function(argument) {
		// no hay elementos que mostrar
		$(".loadClear").removeClass("hide");
	}

	this.fuckMenSalioMal = function(argument) {
		// algo salio muy mal mejor dedicate a otra cosa
		$(".loadError").removeClass("hide");
	}

});

