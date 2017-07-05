hermes.service("Progres", function(){

	this.loading = function(argument) {
		// cargando una solicitud de POST
	}

	this.loaded = function(argument) {
		// cargando una solicitud de GET
		// mientras cargan los recursos
		$(".progress").addClass("hide");
		$(".load").addClass("hide");
		$(".table__content").removeClass("hide");
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

