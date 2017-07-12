hermes.service('Query', function($http, $window, config){

	this.getUrl = function(url) {
		this.url = url;
	};

	this.getAll = function(success, failure) {
		$http.get(this.url)
			.success(success)
			.error(failure)
	};

	this.sendNudes = function(datos , success , failure) {
		$http({
	        url: config.databaseURL + config.switches,
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        },
	        data: $.param(datos)
	    }).then(
		    function(response){
    	    	Materialize.toast('El elemento fue creado', 4000);
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error al crear el elemento', 4000);
		        console.log(JSON.stringify(response));
	    	}
	    );
	};

	this.updateDates = function(datos) {
		$http({
	        url: this.url ,
	        method: "PATCH",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        },
	        data: $.param(datos)
	    })
		.success(function(success) {
	    	Materialize.toast('Tu elemento fue actualizado', 4000);
    		$(".progress-update").addClass("hide");
		})
		.error(function(error) {
	    	Materialize.toast('Ocurrio un error al actualizar el elemento', 4000);
	        console.log(JSON.stringify(error));
		});
	};

	this.killme = function(deletewhat){
		$http.delete(this.url)
			.success(function (success) {
		    	Materialize.toast('El elemento fue eliminado' , 4000);
				console.log(success);
			})
			.error(function (error) {
		    	Materialize.toast('Ocurrio un error al eliminar el elemento' , 4000);
				console.log(error);
			})
	};



	this.getUrlNest = function() {
		// body...

	}

	// switches //puerto
	this.sendNudesXtreme = function(elemento1, elemento2) {
		$http({
	        url: config.databaseURL + config.switches + "/" + elemento1 + config.puertos + "/" + elemento2,
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        }
	    }).then(
		    function(response){
    	    	Materialize.toast('La anidacion fue establecida con existo', 4000);
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error al anidar los elementos', 4000);
		        console.log(JSON.stringify(response));
	    	}
	    );
	};

});