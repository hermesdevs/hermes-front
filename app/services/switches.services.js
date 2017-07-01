hermes.service('Switches', function($http, config) {

	this.getAll = function(success, failure) {
		$http.get(config.databaseURL + config.switches)
			.success(success)
			.error(failure)
	};

	this.sendNudes = function(datos) {
		$http({
	        url: config.databaseURL + config.switches,
	        method: "POST",
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	        data: $.param(datos)
	    }).then(
		    function (response){
		    	Materialize.toast('Tu switche fue creado', 4000);
		        console.log('success');
		        console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error', 4000);
		        console.log('failed');
		        console.log(JSON.stringify(response));
	    	}
	    );
	}

});