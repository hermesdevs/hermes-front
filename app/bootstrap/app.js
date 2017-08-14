var hermes = angular.module('hermes', [
	'ui.router', 
	'ui.materialize'
]);

hermes.constant('config', {
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
    single : "http://hermes.api.dev/switches/",
    home : "/#/switches"
});

hermes.constant('Servidores', {
    general : "http://hermes.api.dev/servidores",
    single : "http://hermes.api.dev/servidores/",
    home : "/#/servidores"
});

hermes.constant('Equipos', {
    general : "http://hermes.api.dev/equipos",
    single : "http://hermes.api.dev/equipos/",
    home : "/#/equipos"
});

hermes.constant('Puertos', {
    general : "http://hermes.api.dev/puertos",
    single : "http://hermes.api.dev/puertos/"
});

