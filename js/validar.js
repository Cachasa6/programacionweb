function validacion() {
	
	indice = document.getElementById("tipodoc").selectedIndex;
	
	
	if( indice == null || indice == 0 ) {
		document.getElementById("tipodoc").style="border:thin solid red";
		alert("Por favor no ha seleccionado un tipo de documento por favor seleccione un opcion");
			
  return false;
}

doc = document.getElementById("identificacion").value;
if( isNaN(doc) ) {
	alert("No de documento Campo vacio o con letras por favor solo digite numeros"); 
	document.getElementById("identificacion").style="border:thin solid red";
  return false;
}

nombre = document.getElementById("nombres").value;
if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		alert("Nombres Campo vacio por favor diligencie el campo");
		document.getElementById("nombres").style="border:thin solid red";
  return false;
}


apellidouno = document.getElementById("apellido1").value;
if( apellidouno == null || apellidouno.length == 0 || /^\s+$/.test(apellidouno) ) {
		alert(" Apellido 1 Campo vacio por favor diligencie el campo");
		document.getElementById("apellido1").style="border:thin solid red";
  return false;
}

apellidodos = document.getElementById("apellido2").value;
if( apellidodos == null || apellidodos.length == 0 || /^\s+$/.test(apellidodos) ) {
		alert(" Apellido 2 Campo vacio por favor diligencie el campo");
		document.getElementById("apellido2").style="border:thin solid red";
  return false;
}


var fecha = document.getElementById("fechanac").value;




 

 
if( !isNaN(fecha) ) {
	alert(" Fecha de nacimento Campo vacio por favor diligencie el campo");
	
	
	document.getElementById("fechanac").style="border:thin solid red";
  return false;
}







  return true;
  
}