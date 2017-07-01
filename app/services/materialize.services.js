hermes.service("materialize", function(){

	$('ul.tabs').tabs();
	
	$(".button-create").sideNav({
		menuWidth: 500,
		draggable: true
	});

	$(".button-edit").sideNav({
		menuWidth: 600,
		edge: 'left',
		draggable: true
	});

	$('select').material_select();
	
	$(".dropdown-button").dropdown();

});

