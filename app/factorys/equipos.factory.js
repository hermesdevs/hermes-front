hermes.service('Equipos', function(config, $stateParams) {
	return {
		"general" : config.databaseURL + config.equipos,
		"single" : config.databaseURL + config.equipos + "/" + $stateParams.id,
		"puertos" : config.databaseURL + config.equipos + "/" + $stateParams.id + config.puertos,
		"puertosEquipos" : config.databaseURL + config.equipos + "/" + $stateParams.id + config.equipos,
		"puertosSwitches" : config.databaseURL + config.equipos + "/" + $stateParams.id + config.equipos,
		"puertosServidores" : config.databaseURL + config.equipos + "/" + $stateParams.id + config.servidores
	};	
});