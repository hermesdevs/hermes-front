//closure

var x = "Tengo un super alcance "

function f1(x) {
	// body...
	return x;
}

function f2() {
	// body...
	var x = "Solo f2 me puede ver";
	return x;
}

function f3(x) {
	// body...
	var x = "Yo soy la verdadera local desde f3";
	return x;
}

function power(base , exp) {
	// body...
	if (exp == undefined) {
		exp = 2;
		var resultado = Math.pow(base, exp);
		return resultado;
	}
}


function ejemploClosure() {
	// body...
	var respuesta = "Un closure"
	var responder = function() {
		// body...
		return respuesta;
	};
	return responder;
}

function miCreador(nombre) {
	// body...
	return function(msj) {
		// body...
		return nombre + msj;
	}
}

var closure = ejemploClosure();
console.log(closure());

var closure2 = miCreador("Nicolas");

console.log(closure2("Yo soy nicolas"));


var count = 99;
for (var i = 0; i < count.length; i++) {
	var equipos = ["Hola mundo"];
	equipos.push("Array" + 1);
}

console.log(equipos);
