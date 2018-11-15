var x = new XMLHttpRequest();
var urlServidor = 'http://localhost/MED/assets/'; 
var urlLogin = 'php/login.php';
var ulrvalidarsesion = 'php/validarSesion.php';
var urlcerrarsesion = 'php/cerrarSesion.php';
var urlcargaAlumnos = 'php/paginadoAlumnos.php';
var urlcargaCarreras = 'php/listaCarreras.php';
var urlAgregarAlumno = 'php/agregarAlumno.php';
var urlcargaEspecilidades = 'php/listaEspecialidades.php';
var urlInfoAlumno = 'php/infoAlumno.php';
var urlInfoPerfilAcademico = 'php/infoPerfilAcademico.php';
var urlInfoCurriculumHabilidades = 'php/infoCurriculumHabilidades.php';
var urlInfoCurriculumIdiomas = 'php/infoCurriculumIdiomas.php';

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

function cargalistaEspecialidades(action){
	document.getElementById("slcEspec").innerHTML = "";
	var idCarrera = document.getElementById("slcCarreras").value;
	var parametros = "action="+action+"&idCarrera="+idCarrera;
	var url = urlServidor+urlcargaEspecilidades;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcEspec").innerHTML = x.responseText;			
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
	var genero = document.querySelector('input[name="inpGenero"]:checked').value;
	var fechaNacimeinto = document.getElementById("inpFechaN").value;
	var nacionalidad = document.getElementById("inpNaci").value;
	var edad = (document.getElementById("inpEdad").value != "")? document.getElementById("inpEdad").value : 0;
	var carrera = (document.getElementById("slcCarreras").value != "")? document.getElementById("slcCarreras").value : 0;

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

	var url = urlServidor+urlAgregarAlumno;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			
			if(datosJSON.STATUS == 0)
			{
				toastr.success("guardado con exito");
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);

}

function conParam(eti,val,param){
	if(param != "") param += "&"+eti+"="+val;
	else {param += eti+"="+val}
	return param;
}


function getVarsUrl()
{
    var url= location.search.replace("?", "");
    var arrUrl = url.split("&");
    var urlObj={};   
    for(var i=0; i<arrUrl.length; i++)
	{
        var x= arrUrl[i].split("=");
        urlObj[x[0]]=x[1]
    }
    return urlObj;
}

function infoAlumno(){
	var idAlumno = getVarsUrl();
	var parametros = "idAlumno="+idAlumno.id;
	var url = urlServidor+urlInfoAlumno;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			document.getElementById("txtNombre").textContent = datosJSON.NOMBRE+" "+datosJSON.AP+" "+datosJSON.AM;
			document.getElementById("spNoControl").textContent = datosJSON.NOCONTROL;
			document.getElementById("spTel").textContent = datosJSON.TEL;
			document.getElementById("spCorreo").textContent = datosJSON.CORREO;
			document.getElementById("spDireccion").textContent = datosJSON.DIRECCION;
			document.getElementById("spFechaN").textContent = datosJSON.FECHAN;
			document.getElementById("spEdad").textContent = datosJSON.EDAD;
			document.getElementById("spNac").textContent = datosJSON.NACI;
			document.getElementById("spStatus").textContent = datosJSON.STATUS;
			document.getElementById("spCarrera").textContent = datosJSON.CARRERA;
			if(datosJSON.GENERO.toLowerCase() == "m"){
				document.getElementById("inpGeneroM").checked = true;	
			}else{
				document.getElementById("inpGeneroF").checked = true
			}
			
		}
	}
	x.send(parametros);
}

urlInfoPerfilAcademico

function infoPerfilAcademico() {
	var idAlumno = getVarsUrl();
	var parametros = "idAlumno="+idAlumno.id;
	var url = urlServidor+urlInfoPerfilAcademico;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if(x.responseText != ""){
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("spEsp").textContent = datosJSON.ESPECIALIDAD;
				document.getElementById("spSemestre").textContent = datosJSON.SEMESTRE;
				document.getElementById("spPromedio").textContent = datosJSON.PROMEDIO;
				
				if(datosJSON.SS == 1){
					document.getElementById("ckSS").checked = true;	
				}
				if(datosJSON.CREDITOS == 1){
					document.getElementById("ckCr").checked = true
				}
			}
		}
	}
	x.send(parametros);
}

function infoCurriculumHabilidades() {
	var idAlumno = getVarsUrl();
	var parametros = "idAlumno="+idAlumno.id;
	var url = urlServidor+urlInfoCurriculumHabilidades;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if(x.responseText != ""){
				document.getElementById("divHabilidades").innerHTML = x.responseText;		
			}
		}
	}
	x.send(parametros);
}


function infoCurriculumIdiomas() {
	var idAlumno = getVarsUrl();
	var parametros = "idAlumno="+idAlumno.id;
	var url = urlServidor+urlInfoCurriculumIdiomas;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if(x.responseText != ""){
				document.getElementById("divIdiomas").innerHTML = x.responseText;		
			}
		}
	}
	x.send(parametros);
}