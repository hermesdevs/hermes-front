hermes.service('Session', function($http,config,$window){

	this.saveUser = function(userId) {
        localStorage.setItem("id", userId);
		$http.get(config.databaseURL + config.usuarios + "/" + userId)
			.success(function(userForLocal){
				var u = userForLocal.data;
		        localStorage.setItem("name", u.name);
		        localStorage.setItem("mail", u.mail);
		        localStorage.setItem("state", "active");
		        localStorage.setItem("token", u.remember_token);
			})
			.error(function(error) {
				console.log(error);
			})
	}

});


(function(userId) {

	var that = this;

	this.userId = userId;

	var opciones = [undefined , 'number', 'string'];


	if (typeof this.userId == opciones[0] || this.userId === undefined) {
        destroyUser();
	    $(location).attr("href", "#/");	
		console.warn("Session Clear");
	}
	else if(isNaN(this.userId) === false && typeof this.userId !== undefined) {
		if(window.location.hash === "#/login" || window.location.hash === "#/register" || window.location.hash === "#/") {
		    $(location).attr("href", "#/dashboard");
		}
		console.info("Hay una session iniciada");
		observadorStateSession();
	}else{			
		console.warn("Algo salio muy mal");
	}
	

	function observadorStateSession() {
		setTimeout(function(){
			if (isNaN(that.userId) === false && typeof that.userId != undefined) {
				console.info("La session es estable");
				observadorStateSession();
			} else {
		        destroyUser();
			}
		}, 10000);
	}

	function destroyUser() {
		var infoUser = ["id", "name", "mail", "state", "token"]
		for (var i = 0; i < infoUser.length; i++) {
	        localStorage.removeItem(infoUser[i]);
		// console.warn("Eliminando atributo " + infoUser[i] + " de la session");	        
		}
		console.warn("Necesitas iniciar sesion para obtener tus credenciales");
	}

})(localStorage.id);


