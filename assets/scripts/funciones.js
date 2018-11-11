var x = new XMLHttpRequest();
var urlServidor = 'http://localhost/MED/assets/'; 
var urlLogin = 'php/login.php';
var ulrvalidarsesion = 'php/validarSesion.php';
var urlcerrarsesion = 'php/cerrarSesion.php';
var urlcargaAlumnos = 'php/paginadoAlumnos.php';
var urlcargaCarreras = 'php/listaCarreras.php';

function iniciarSesion()
{ 
	var url = urlServidor+urlLogin;
	
	x.open('POST',url,true);
	
	var datos = new FormData(document.getElementById('frmLogin'));
        
	x.send(datos);
	
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			
			
			if(datosJSON.STATUS == 0)
			{	
				location.href =  'http://localhost/MED/index.html'; 
			}
			if(datosJSON.STATUS > 0)
			{
				//alert(datosJSON.MENSAJE);
				toastr.options.positionClass = 'toast-top-center';
				toastr.error(datosJSON.MENSAJE);
			}
			
		}
	}
}

function validarSesion()
{
	var session = false;
	var url = urlServidor+ulrvalidarsesion;
	
	x.open('GET', url, false);
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			
			if(datosJSON.STATUS == 0)
			{
				var elemento1 = document.getElementById('TxtUser');
				elemento1.innerHTML ="";
				var txt1 = document.createTextNode(datosJSON.USUARIO);
				elemento1.appendChild(txt1);
				session = true;
			}
			if(datosJSON.STATUS > 0)
			{
				location.href =  'http://localhost/MED/page-login.html';
				session = false; 
			}
		}
	}
	x.send();
	return session;
}

function cerrarsesion()
{
	var url = urlServidor+urlcerrarsesion;
	
	x.open('GET', url, true);
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			location.href = 'http://localhost/MED/page-login.html';
		}
	}
	x.send();
}

function cargaAlumnos(page){
	var noControl=document.getElementById("inpNoControl").value;
	var nombre = document.getElementById("inpNombre").value;
	var carrera = document.getElementById("slcCarreras").value;
	var status = document.getElementById("slcStatus").value;
	var per_page=10;
	var parametros = "funcion=cargaAlumnos&page="+page+"&noControl="+noControl+"&per_page="+per_page+"&nombre="+nombre+"&carrera="+carrera+"&status="+status;
	
	var url = urlServidor+urlcargaAlumnos;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("respuestaAjax").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function cargalistaCarreras(action){
	document.getElementById("slcCarreras").innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlcargaCarreras;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcCarreras").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function validarAlumno(){
	var correcto =  true;
	if(document.getElementById("inpNombre").value == "") { document.getElementById("divNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpApaterno").value == "") { document.getElementById("divApaterno").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpAmaterno").value == "") { document.getElementById("divAmaterno").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpNoControl").value == "") { document.getElementById("divNoControl").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpCorreo").value == "") { document.getElementById("divCorreo").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarAlumno(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarAlumno() {
	var nombre = document.getElementById("inpNombre").value;
	var apaterno = document.getElementById("inpApaterno").value;
	var amaterno = document.getElementById("inpAmaterno").value;
	var nocontrol = document.getElementById("inpNoControl").value;
	var correo = document.getElementById("inpCorreo").value;
	var telefono = document.getElementById("inpTelefono").value;
	var status = document.getElementById("slcEstatus").value;
	var direccion = document.getElementById("inpDireccion").value;
	var genero = document.getElementById("inpGenero").value;
	var fechaNacimeinto = document.getElementById("inpFechaN").value;
	var nacionalidad = document.getElementById("inpNaci").value;
	var edad = document.getElementById("inpEdad").value;
	var carrera = document.getElementById("slcCarreras").value;

	var parametros = "";
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("apaterno",apaterno,parametros);
	parametros = conParam("amaterno",amaterno,parametros);
	parametros = conParam("nocontrol",nocontrol,parametros);
	parametros = conParam("correo",correo,parametros);
	parametros = conParam("telefono",telefono,parametros);
	parametros = conParam("status",status,parametros);
	parametros = conParam("direccion",direccion,parametros);
	parametros = conParam("genero",genero,parametros);
	parametros = conParam("fechaNacimeinto",fechaNacimeinto,parametros);
	parametros = conParam("nacionalidad",nacionalidad,parametros);
	parametros = conParam("edad",edad,parametros);
	parametros = conParam("carrera",carrera,parametros);

	var url = urlServidor+urlcargaCarreras;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcCarreras").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);

}

function conParam(eti,val,param){
	if(param != "") param += "&"+eti+"="+val;
	else {param += eti+"="+val}
	return param;
}
