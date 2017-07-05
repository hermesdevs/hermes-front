hermes.service('Query', function($http, $window, config){

	this.getUrl = function(url) {
		this.url = url;
	} 

	this.getAll = function(success, failure) {
		$http.get(this.url)
			.success(success)
			.error(failure)
	};

	this.getSwitcheEquipo = function(success, failure) {
		$http.get(this.url)
			.success(success)
			.error(failure)
	};

	this.getSingle = function(success, failure) {
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
    	    	Materialize.toast('Tu switche fue creado', 4000);
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error', 4000);
		        console.log(JSON.stringify(response));
	    	}
	    );
	}

	this.updateDates = function(datos) {
		$http({
	        url: this.url ,
	        method: "PUT",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        },
	        data: $.param(datos)
	    }).then(
		    function(response){
    	    	Materialize.toast('Tu switche fue actualizado', 4000);
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error', 4000);
		        console.log(JSON.stringify(response));
	    	}
	    );
	}

	this.killme = function() {
		// code here
		$http({
	        url: this.url ,
	        method: "DELETE",
	        headers:{
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        }
	    }).then(
		    function(response){
    	    	Materialize.toast('Tu switche fue eliminado', 4000);
    			$window.location.href="#/switches";
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error al eliminar tu switche', 4000);
		        console.log(JSON.stringify(response));
	    	}
	    );
	};

});