hermes.directive('preloader' , function() {
	// body...
	return {
		restrict: 'EA',
		templateUrl: '../view/directives/preloader.html',
		directivaExiste: function() {
			// body...
			console.log("Directiva funciona")
		} 
	};
});