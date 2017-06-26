hermes.service('Servidores', function($http, config) {

	this.getAll = function(success, failure) {
		$http.get(config.databaseURL + config.servidores)
			.success(success)
			.error(failure);
	}

});
