hermes.service('Query', function($http, config) {

	this.getUrl = function(url) {
		this.url = url;
	} 

	this.getAll = function(success, failure) {
		$http.get(this.url)
			.success(success)
			.error(failure)
	};

	this.getSingle = function(success, failure) {
		$http.get(this.url)
			.success(success)
			.error(failure)
	};


});