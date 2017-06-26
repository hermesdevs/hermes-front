hermes.service('Equipos', function($http, config) {

	this.getAll = function(success, failure) {
		$http.get(config.databaseURL + config.equipos)
			.success(success)
			.error(failure);
	}

});