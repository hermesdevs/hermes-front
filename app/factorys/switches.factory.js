hermes.factory('SwitchesFactory', function($resource, config) {
	return $resource(config.databaseURL + config.switches);
});