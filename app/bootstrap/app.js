var hermes = angular.module('hermes', [
	'ui.router', 
	'ngResource',
	'ui.materialize'
]);

hermes.constant('config', {
    apiKey: "AIzaSyB5iw0dc-qipE6iIEeoezD2oetkHh0s8ls",
    databaseURL: "http://hermes.api.dev",
    equipos: "/equipos",
    servidores: "/servidores",
    switches: "/switches",
    puertos: "/puertos",
    vlans: "/vlans",
    version: "0.1.2"
});

