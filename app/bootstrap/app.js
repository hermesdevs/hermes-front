var hermes = angular.module('hermes', [
	'ui.router', 
	'ui.materialize'
]);

hermes.constant('config', {
    apiKey: "AIzaSyB5iw0dc-qipE6iIEeoezD2oetkHh0s8ls",
    databaseURL: "http://hermes.api.dev",
    usuarios: "/usuarios",
    equipos: "/equipos",
    servidores: "/servidores",
    switches: "/switches",
    puertos: "/puertos",
    vlans: "/vlans",
    version: "0.1.2"
});

hermes.constant('Switches', {
    general : "http://hermes.api.dev/switches",
    single : "http://hermes.api.dev/switches/"
});
