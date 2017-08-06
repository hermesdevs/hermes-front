hermes.service('Auth', function($http, $window, $location, config , Progres, Session){

	var that = this;	

	this.getUser = function(userID ,success, failure){
		$http.get(config.databaseURL + config.usuarios + "/" + userID)
			.success(success)
			.error(failure)
	};

	this.updateUser = function(userID, datos) {
		$http({
	        url: config.databaseURL + config.usuarios + "/" + userID,
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

	this.login = function(user, success, failure) {
		$http({
	        url: config.databaseURL + "/auth/login",
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        },
	        data: $.param(user)
	    }).then(
		    function(success){
    	        Session.saveUser(success.data.data[0].id)
		        $window.location.href="#/dashboard";
		    }, 
	    	function (error){
		        // console.log(JSON.stringify(error.data.status));
		        if (error.status == "402") {
			    	Materialize.toast('La contraseña es incorrecta', 3000);		        	
			        document.getElementById("quickstart-sign-in").disabled = false;
        			Progres.progressloaded();

		        } else if(error.status == "404") {
			    	Materialize.toast('No hay un usuario registrado con este correo', 6000);		        	
			        document.getElementById("quickstart-sign-in").disabled = false;
        			Progres.progressloaded();
		        }else{
			        console.log(JSON.stringify(error));
			    	Materialize.toast('Ocurrio un error desconocido al intentar acceder', 6000);		        	
			        document.getElementById("quickstart-sign-in").disabled = false;
	    			Progres.progressloaded();
		        }
	    	}
	    );
	};

	this.register = function(user, success, failure) {
		$http({
	        url: config.databaseURL + "/auth/register",
	        method: "POST",
	        headers:{ 
	        	'Content-Type': 'application/x-www-form-urlencoded' 
	        },
	        data: $.param(user)
	    }).then(
		    function(success){
    	    	Materialize.toast('Bienvenido - Ahora eres usuario de Hermes', 4000);
				Progres.progressloaded();
    	        Session.saveUser(success.data.data[0].id)	
    	        $window.location.href="#/dashboard";
		    }, 
	    	function(error){
		    	// Materialize.toast('Ocurrio un error al crear el usuario', 4000);
		        console.log(JSON.stringify(error));
		        if (error.status == "402") {
			    	Materialize.toast('Este correo ya esta en uso por otro usuario', 3000);		        	
			        document.getElementById("quickstart-sign-up").disabled = false;
        			Progres.progressloaded();
		        }else{
			        console.log(JSON.stringify(error));
			    	Materialize.toast('Ocurrio un error desconocido al intentar registrarte', 6000);
			        document.getElementById("quickstart-sign-up").disabled = false;
	    			Progres.progressloaded();
		        }
	    	}
	    );
	};

});

