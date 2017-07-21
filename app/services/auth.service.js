hermes.service('Auth', function($http, $window, $location, config ){
	
	this.setUserId = function(id) {
		this.user = id;
	};

	this.getUser = function(success, failure){
		$http.get(config.databaseURL + config.usuarios + "/" + this.user)
			.success(success)
			.error(failure)
	};

	this.updateUser = function(datos) {
		$http({
	        url: config.databaseURL + config.usuarios + "/" + this.user,
	        method: "PATCH",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        },
	        data: $.param(datos)
	    })
		.success(function(success) {
	    	Materialize.toast('Los datos de usuario fueron actualizados', 4000);
    		$(".progress-update").addClass("hide");
		})
		.error(function(error) {
	    	Materialize.toast('Ocurrio un error al actualizar tus datos', 4000);
	        console.log(JSON.stringify(error));
		});
	};

	this.login = function(success, failure) {
		$http.get(config.databaseURL + config.usuarios + "1")
			.success(success)
			.error(failure)
	};

	this.register = function(user, success, failure) {
		$http({
	        url: config.databaseURL + config.usuarios,
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        },
	        data: $.param(user)
	    }).then(
		    function(response){
	    		$(".progress-update").addClass("hide");
    	    	Materialize.toast('El usuario fue creado', 4000);
    	        var u = response.data.data;		
    	        $window.location.href="#/dashboard";
				localStorage.setItem("id", u.id);
				localStorage.setItem("token", u.remember_token);
				localStorage.setItem("state", "active");
		        // console.log(JSON.stringify(response));
		    }, 
	    	function (response){
		    	Materialize.toast('Ocurrio un error al crear el usuario', 4000);
		        console.log(JSON.stringify(response));
	    	}
	    );
	};

});