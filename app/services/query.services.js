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
		    function(success){
    	    	Materialize.toast('El elemento fue creado', 4000);
		        console.log(JSON.stringify(success));
		    }, 
	    	function (err){
		    	Materialize.toast('Ocurrio un error al crear el elemento', 4000);
		        console.log(JSON.stringify(err));
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

	this.killme = function(urlDefine , goHome){
		$http.delete(urlDefine)
			.success(function (success) {
		    	Materialize.toast('El elemento fue eliminado' , 4000);
				console.log(success);
		        $window.location.href= goHome;	
			})
			.error(function (error) {
		    	Materialize.toast('Ocurrio un error al eliminar el elemento' , 4000);
				console.log(error);
			})
	};

	this.createRelation = function(dataUri, success, error){
		$http({
	        url: dataUri,
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        }
	    })
	    .success(success)
	    .error(function(error){
	    	Materialize.toast("Ocurrio un error desconocido", 4000);
	        console.log(JSON.stringify(error.data));
	    });
	}

	this.fatality = function(dataUri, success, error){
		$http({
	        url: dataUri,
	        method: "DELETE",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        }
	    })
	    .success(success)
	    .error(function(error){
	    	Materialize.toast("Ocurrio un error desconocido", 4000);
	        console.log(JSON.stringify(error.data));
	    });
	};

});