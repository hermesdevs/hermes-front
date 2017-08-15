hermes.controller("switches_controller", function($scope, Switches, Progres, Query){
	
	Query.getAll(Switches.general, function(switches){
		$scope.switches = switches.data;
		Progres.loaded();

		for (var i = 0; i < switches.data.length; i++) {
			console.log(switches.data[i].name);
			$("#tablaEquipos").append(
				"<tr><td>"+ switches.data[i].id + 
				"</td><td>"+ switches.data[i].name + 
				"</td><td>"+ switches.data[i].model +
				"</td><td>"+ switches.data[i].so + 
				"</td><td>"+ switches.data[i].ip +
				"</td></tr>");
		}

		var pdf = new jsPDF('p', 'pt', 'letter');
	    pdf.cellInitialize();
	    pdf.setFontSize(10);
	    $.each( $('#tablaSwitche tr'), function (i, row){
	        $.each($(row).find("td, th"), function(j, cell){
	            var txt = $(cell).text().trim() || " ";
	            var width = (j==7) ? 40 : 70;
	            pdf.cell(10, 50, width, 30, txt, i);
	        });
	    });

		$scope.printPDF = function() {
			pdf.save('registro-de-switches.pdf');
	    	Materialize.toast('Generando ...', 4000);
			console.log("Imprimir");
		}

	})
		
	$scope.crearSW = function(datos){
		Query.sendNudes(Switches.general, datos);
	};
	
	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}
	
});

