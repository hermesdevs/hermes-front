hermes.service('Query', function($http, $window, config){

	this.getAll = function(urlDefine , success , failure) {
		$http.get(urlDefine)
			.success(success)
			.error(failure)
	};

	this.sendNudes = function(urlDefine , datos) {
		$http({
	        url: urlDefine,
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

	this.updateDates = function(urlDefine, datos) {
		$http({
	        url: urlDefine ,
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

	this.killme = function(urlDefine){
		$http.delete(urlDefine)
			.success(function (success) {
		    	Materialize.toast('El elemento fue eliminado' , 4000);
				console.log(success);
			})
			.error(function (error) {
		    	Materialize.toast('Ocurrio un error al eliminar el elemento' , 4000);
				console.log(error);
			})
	};

	// switches //puerto
	this.relation = function(switche, puerto, equipo) {
		$http({
	        url: config.databaseURL + config.switches + "/" + switche + config.puertos + "/" + puerto,
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        }
	    }).then(
		    function(response){
    	    	Materialize.toast('Se activo el puerto ' + puerto + ' del switche ' + switche, 4000);
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error al activar el puerto ' + puerto + ' con el switche ' + switche, 4000);
		        console.log(JSON.stringify(response));
		        console.log(response.status);
	    	}
	    )
		$http({
	        url: config.databaseURL + config.equipos + "/" + equipo + config.puertos + "/" + puerto,
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        }
	    }).then(
		    function(response){
    	    	Materialize.toast('Se conecto el equipo ' + equipo + ' al puerto ' + puerto, 4000);
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		        console.log(JSON.stringify(response));
		        console.log(response.status);
	    	}
	    );
	};

});