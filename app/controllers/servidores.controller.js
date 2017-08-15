hermes.controller("servidores_controller", function($scope, Progres, Servidores, Query ){

	Query.getAll(Servidores.general, function(servidores){
		$scope.servidores = servidores.data;
		Progres.loaded();

		for (var i = 0; i < servidores.data.length; i++) {
			console.log(servidores.data[i].name);
			$("#tablaEquipos").append(
				"<tr><td>"+ servidores.data[i].id + 
				"</td><td>"+ servidores.data[i].name + 
				"</td><td>"+ servidores.data[i].ip +
				"</td><td>"+ servidores.data[i].mac +
				"</td><td>"+ servidores.data[i].so + 
				"</td><td>"+ servidores.data[i].description + 
				"</td></tr>");
		}

		var pdf = new jsPDF('p', 'pt', 'letter');
	    pdf.cellInitialize();
	    pdf.setFontSize(10);
	    $.each( $('#tablaServidores tr'), function (i, row){
	        $.each($(row).find("td, th"), function(j, cell){
	            var txt = $(cell).text().trim() || " ";
	            var width = (j==7) ? 40 : 70;
	            pdf.cell(10, 50, width, 30, txt, i);
	        });
	    });

		$scope.printPDF = function() {
			pdf.save('registro-de-servidores.pdf');
	    	Materialize.toast('Generando ...', 4000);
			console.log("Imprimir");
		}

	})

	$scope.servidor = {};
		
	$scope.crearServidor = function(datos) {
		Query.sendNudes(Servidores.general, datos);
	};
	
	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}

});

