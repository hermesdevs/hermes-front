hermes.controller("equipos_controller", function($scope, Query, Equipos, Progres){

	Query.getAll(Equipos.general, function(equipos){
		$scope.equipos = equipos.data;
		Progres.loaded();

		for (var i = 0; i < equipos.data.length; i++) {
			console.log(equipos.data[i].name);
			$("#tablaEquipos").append(
				"<tr><td>"+ equipos.data[i].id + 
				"</td><td>"+ equipos.data[i].name + 
				"</td><td>"+ equipos.data[i].so + 
				"</td><td>"+ equipos.data[i].brand + 
				"</td><td>"+ equipos.data[i].model +
				"</td><td>"+ equipos.data[i].mac +
				"</td><td>"+ equipos.data[i].ip +
				"</td></tr>");
		}

		var pdf = new jsPDF('p', 'pt', 'letter');
	    pdf.cellInitialize();
	    pdf.setFontSize(10);
	    $.each( $('#tablaEquipos tr'), function (i, row){
	        $.each($(row).find("td, th"), function(j, cell){
	            var txt = $(cell).text().trim() || " ";
	            var width = (j==7) ? 40 : 70;
	            pdf.cell(10, 50, width, 30, txt, i);
	        });
	    });

		$scope.printPDF = function() {
			pdf.save('registro-de-equipos.pdf');
	    	Materialize.toast('Generando ...', 4000);
			console.log("Imprimir");
		}

	})

	$scope.equipo = {};
		
	$scope.crearEquipos = function(datos) {
		Query.sendNudes(Equipos.general, datos);
	};
	
	$scope.verModulos = function(){
    	Materialize.toast('Esta funcion aun no esta lista', 4000);
	}




});

