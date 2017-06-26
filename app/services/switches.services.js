hermes.service('Switches', function($http, config) {

	this.getAll = function(success, failure) {
		$http.get(config.databaseURL + config.switches)
			.success(success)
			.error(failure);
	}

});