hermes.service("materialize", function(){

	// menu lateral para editar	
	$(".button-edit").sideNav({
		menuWidth: 600,
		edge: 'left',
		draggable: true
	});

	// listas de seleccion en los formularios	
	$('select').material_select();
	
	// pequeño menu desegable en las plantillas - para mas opciones	
	$(".dropdown-button").dropdown();

});

