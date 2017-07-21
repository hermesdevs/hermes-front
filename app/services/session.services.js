hermes.service('Session', function($http, $window, config, Auth){
	
	this.userId = localStorage.id;
	
	Auth.setUserId(this.userId);

	this.state = function(){
		var opciones = [undefined , 'number', 'string'];
		// console.log(typeof this.userId)
		if (typeof this.userId == opciones[0] || this.userId === undefined) {
	        this.destroyUser();
	        $window.location.href="#/";	
			console.warn("No tienes los permisos");
		}else{
			console.info("Session estable");
		}
	}

	this.saveUser = function(userId) {
		// body...
		Auth.getUser(function(userId){
			var u = userId.data;
	        localStorage.setItem("name", u.name);
	        localStorage.setItem("mail", u.mail);
	        localStorage.setItem("id", u.id);
	        localStorage.setItem("state", "active");
	        localStorage.setItem("token", u.remember_token);
		})
	}

	this.destroyUser = function(userId) {
		// body...
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("mail");
        localStorage.removeItem("state");
        localStorage.removeItem("token");
    	Materialize.toast('Necesitas iniciar sesion para obtener tus credenciales', 4000);
	}

});