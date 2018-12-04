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
var urlEditarAlumno = 'php/editarAlumno.php';
var urlEditarCVHabilidad = 'php/editarCVHabilidad.php';
var urlEliminarCVHabilidad = 'php/eliminarCVHabilidad.php';
var urlCargaListaHabilidades = 'php/listaHabilidades.php';
var urlAgregarCVHabilidad = 'php/agregarCVHabilidad.php';
var urlCargaListaHabilidadesNoCV = 'php/listaHabilidadesNoCV.php';
var urlEliminarAlumno = 'php/eliminarAlumno.php';
var urlCargaListaIdiomasNoCV = 'php/listaIdiomasNoCV.php';
var urlAgregarCVIdioma = 'php/agregarCVIdioma.php';
var urlEditarCVIdioma = 'php/editarCVIdioma.php';
var urlEliminarCVIdioma = 'php/eliminarCVIdioma.php';
var urlEditarPerfilAcademico = 'php/editaPerfilAcademico.php';
var urlcargaEmpresas = 'php/paginadoEmpresas.php';
var urlInfoEmpresa = 'php/infoEmpresa.php';
var urlcargaProyectosEmpresa = 'php/paginadoProyectosEmpresa.php';
var urlcargaAsesoresEEmpresa = 'php/paginadoAsesoresExternosEmpresa.php';
var urlAgregarEmpresa = 'php/agregarEmpresa.php';
var urlEditarEmpresa = 'php/editarEmpresa.php';
var urlEliminarEmpresa = 'php/eliminarEmpresa.php'; 
var urlcargaPeriodos = 'php/listaPeriodos.php';
var urlcargaAsesorEE = 'php/listaAsesoresEmpresa.php';
var urlcargaProyectos = 'php/paginadoProyectos.php';
var urlInfoProyecto = 'php/infoProyecto.php';
var urlInfoConvenio = 'php/infoConvenio.php';
var urlcargaAlumnosProyecto = 'php/paginadoAlumnosProyecto.php';
var urlcargaListaEmpresas = 'php/listaEmpresas.php';
var urlcargaAsesorEE2 = 'php/listaAsesoresEmpresa2.php';
var urlAgregarProyecto = 'php/agregarProyecto.php';

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
	var idAlumno = getVarsUrl();
	var parametros = "action="+action+"&idAlumno="+idAlumno.id;
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
	if(document.getElementById("inpGeneroM").checked == false && document.getElementById("inpGeneroF").checked == false) { correcto = false; }
	if(document.getElementById("slcCarreras").value == "") { document.getElementById("divCarrera").classList.add("has-error"); correcto = false; }
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
				setTimeout(redireccionarEditar, 2000, datosJSON.ID);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

function redireccionarEditar(id){
	location.href ="http://localhost/MED/infoAlumno.html?id="+id;
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
				}else
				{
					document.getElementById("ckSS").checked = false;	
				}
				if(datosJSON.CREDITOS == 1){
					document.getElementById("ckCr").checked = true;
				}else{
					document.getElementById("ckCr").checked = false;
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
				$(".dial").knob({
		        	'width':70,
		        	'height':70,
		        	'readOnly':true
		        });		
			}
		}
	}
	x.send(parametros);
}

function infoAlumnoModal(){
	cargalistaCarreras("lista");
	var idAlumno = getVarsUrl();
	var parametros = "idAlumno="+idAlumno.id;
	var url = urlServidor+urlInfoAlumno;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			var datosJSON = JSON.parse(x.responseText);
			document.getElementById("inpMNombre").value = datosJSON.NOMBRE;
			document.getElementById("inpMAP").value = datosJSON.AP;
			document.getElementById("inpMAM").value = datosJSON.AM;
			document.getElementById("inpMNoControl").value = datosJSON.NOCONTROL;
			document.getElementById("inpMTelefono").value = datosJSON.TEL;
			document.getElementById("inpMCorreo").value = datosJSON.CORREO;
			document.getElementById("inpMDireccion").value = datosJSON.DIRECCION;
			document.getElementById("inpMFN").value = datosJSON.FECHAN;
			document.getElementById("inpMEdad").value = datosJSON.EDAD;
			document.getElementById("inpMNacionalidad").value = datosJSON.NACI;
			document.getElementById("slcMEstatus").value = datosJSON.STATUS;
			document.getElementById("slcCarreras").value = datosJSON.IDCARRERA;
			if(datosJSON.GENERO.toLowerCase() == "m"){
				document.getElementById("inpMGeneroM").checked = true;	
			}else{
				document.getElementById("inpMGeneroF").checked = true
			}
			
		}
	}
	x.send(parametros);
}

function validarAlumnoModal(){
	var correcto =  true;
	if(document.getElementById("inpMNombre").value == "") { document.getElementById("divMNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMAP").value == "") { document.getElementById("divMAp").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMAM").value == "") { document.getElementById("divMAm").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMNoControl").value == "") { document.getElementById("divMNoControl").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMCorreo").value == "") { document.getElementById("divMCorreo").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcCarreras").value == "") { document.getElementById("divMCarrera").classList.add("has-error"); correcto = false; }
	if (correcto){ editaAlumno(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function editaAlumno() {
	var idAlumno = getVarsUrl();
	var nombre = document.getElementById("inpMNombre").value;
	var apaterno = document.getElementById("inpMAP").value;
	var amaterno = document.getElementById("inpMAM").value;
	var nocontrol = document.getElementById("inpMNoControl").value;
	var correo = document.getElementById("inpMCorreo").value;
	var telefono = document.getElementById("inpMTelefono").value;
	var status = document.getElementById("slcMEstatus").value;
	var direccion = document.getElementById("inpMDireccion").value;
	var genero = document.querySelector('input[name="inpMGenero"]:checked').value;
	var fechaNacimeinto = document.getElementById("inpMFN").value;
	var nacionalidad = document.getElementById("inpMNacionalidad").value;
	var edad = (document.getElementById("inpMEdad").value != "")? document.getElementById("inpMEdad").value : 0;
	var carrera = (document.getElementById("slcCarreras").value != "")? document.getElementById("slcCarreras").value : 0;

	var parametros = "";
	parametros = conParam("id",idAlumno.id,parametros);
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

	var url = urlServidor+urlEditarAlumno;	
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
				toastr.success("actualizado con exito");
				$('#modalInfoGeneral').modal('hide');
				infoAlumno();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);

}

function infoHabilidadModal(idCV,idHabilidad,nombre,porcentaje) {
	document.getElementById("inpMNombreH").value = "";
	document.getElementById("inpMPorcentajeH").value = "";
	document.getElementById("inpMidCV").value = "";
	document.getElementById("inpMidHab").value = "";
	document.getElementById("inpMNombreH").value = nombre;
	document.getElementById("inpMPorcentajeH").value = porcentaje;
	document.getElementById("inpMidCV").value = idCV;
	document.getElementById("inpMidHab").value = idHabilidad;
}

function editaCVHabilidad() {
	var idCV = document.getElementById("inpMidCV").value;
	var idHab = document.getElementById("inpMidHab").value;
	var porcentaje = (document.getElementById("inpMPorcentajeH").value != "")? document.getElementById("inpMPorcentajeH").value : 0;
	var parametros = "";
	parametros = conParam("idCV",idCV,parametros);
	parametros = conParam("idHab",idHab,parametros);
	parametros = conParam("porcentaje",porcentaje,parametros);

	var url = urlServidor+urlEditarCVHabilidad;	
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
				toastr.success("actualizado con exito");
				$('#mdlEditarHabilidad').modal('hide');
				infoCurriculumHabilidades();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al actualizar");
			}
		}
	}
	x.send(parametros);
}

function eliminaCVHabilidad() {
	var idCV = document.getElementById("inpMidCV").value;
	var idHab = document.getElementById("inpMidHab").value;
	var parametros = "";
	parametros = conParam("idCV",idCV,parametros);
	parametros = conParam("idHab",idHab,parametros);

	var url = urlServidor+urlEliminarCVHabilidad;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			
			if(datosJSON.STATUS == 0)
			{
				toastr.success("eliminado con exito");
				$('#mdlEditarHabilidad').modal('hide');
				infoCurriculumHabilidades();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al eliminar");
			}
		}
	}
	x.send(parametros);
}

function cargalistaHabilidades(action){
	document.getElementById("slcMAHabilidades").innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlCargaListaHabilidades;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcMAHabilidades").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function cargalistaHabilidadesNoCV(action){
	document.getElementById("slcMAHabilidades").innerHTML = "";
	var idAlumno = getVarsUrl();
	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("action",action,parametros);
	var url = urlServidor+urlCargaListaHabilidadesNoCV;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcMAHabilidades").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

$('#mdlAgregarHabilidad').on('show.bs.modal', function (e) {
  document.getElementById("inpMAPorcentajeH").value = 0;
})

function validarCVHabilidad(){
	var correcto =  true;
	if(document.getElementById("slcMAHabilidades").value == "") { document.getElementById("divMANombreH").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMAPorcentajeH").value == "") { document.getElementById("divMAPorcentajeH").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarCVHabilidad(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarCVHabilidad() {
	var idAlumno = getVarsUrl();
	var idHab = document.getElementById("slcMAHabilidades").value;
	var porcentaje = document.getElementById("inpMAPorcentajeH").value;

	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("idHab",idHab,parametros);
	parametros = conParam("porcentaje",porcentaje,parametros);

	var url = urlServidor+urlAgregarCVHabilidad;	
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
				$('#mdlAgregarHabilidad').modal('hide');
				infoCurriculumHabilidades();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
				$('#mdlAgregarHabilidad').modal('hide');
			}
		}
	}
	x.send(parametros);
}

var idAlumnoEliminar = 0;
function eliminarAlumno(){
	var parametros = "";
	parametros = conParam("idAlumno",idAlumnoEliminar,parametros);

	var url = urlServidor+urlEliminarAlumno;	
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
				toastr.success("eliminado con exito");
				$('#mdlConfirm').modal('hide');
				cargaAlumnos(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al eliminar");
			}
		}
	}
	x.send(parametros);
}

function cargalistaIdiomasNoCV(action){
	document.getElementById("slcMAIdiomas").innerHTML = "";
	var idAlumno = getVarsUrl();
	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("action",action,parametros);
	var url = urlServidor+urlCargaListaIdiomasNoCV;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcMAIdiomas").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}


function validarCVIdioma(){
	var correcto =  true;
	if(document.getElementById("slcMAIdiomas").value == "") { document.getElementById("divMAIdoma").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMAPorcentajeI").value == "") { document.getElementById("divMAPorcentajeI").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarCVIdioma(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarCVIdioma() {
	var idAlumno = getVarsUrl();
	var idIdioma = document.getElementById("slcMAIdiomas").value;
	var porcentaje = document.getElementById("inpMAPorcentajeI").value;

	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("idIdioma",idIdioma,parametros);
	parametros = conParam("porcentaje",porcentaje,parametros);

	var url = urlServidor+urlAgregarCVIdioma;	
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
				$('#mdlAgregarIdioma').modal('hide');
				infoCurriculumIdiomas();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
				$('#mdlAgregarIdioma').modal('hide');
			}
		}
	}
	x.send(parametros);
}

function infoIdiomaModal(idCV,idIdioma,nombre,porcentaje) {
	document.getElementById("inpMEIdioma").value = "";
	document.getElementById("inpMEPorcentajeI").value = "";
	document.getElementById("inpMidCVI").value = "";
	document.getElementById("inpMidIdm").value = "";
	document.getElementById("inpMEIdioma").value = nombre;
	document.getElementById("inpMEPorcentajeI").value = porcentaje;
	document.getElementById("inpMidCVI").value = idCV;
	document.getElementById("inpMidIdm").value = idIdioma;
}

function editaCVIdioma() {
	var idCV = document.getElementById("inpMidCVI").value;
	var idIdioma = document.getElementById("inpMidIdm").value;
	var porcentaje = (document.getElementById("inpMEPorcentajeI").value != "")? document.getElementById("inpMEPorcentajeI").value : 0;
	var parametros = "";
	parametros = conParam("idCV",idCV,parametros);
	parametros = conParam("idIdioma",idIdioma,parametros);
	parametros = conParam("porcentaje",porcentaje,parametros);

	var url = urlServidor+urlEditarCVIdioma;	
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
				toastr.success("actualizado con exito");
				$('#mdlEditarIdioma').modal('hide');
				infoCurriculumIdiomas();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al actualizar");
			}
		}
	}
	x.send(parametros);
}

function eliminaCVIdioma() {
	var idCV = document.getElementById("inpMidCVI").value;
	var idIdioma = document.getElementById("inpMidIdm").value;
	var parametros = "";
	parametros = conParam("idCV",idCV,parametros);
	parametros = conParam("idIdioma",idIdioma,parametros);

	var url = urlServidor+urlEliminarCVIdioma;	
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
				toastr.success("eliminado con exito");
				$('#mdlEditarIdioma').modal('hide');
				infoCurriculumIdiomas();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al eliminar");
			}
		}
	}
	x.send(parametros);
}

function infoPAModal(){
	cargalistaEspecialidades("lista");
	var idAlumno = getVarsUrl();
	var parametros = "idAlumno="+idAlumno.id;
	var url = urlServidor+urlInfoPerfilAcademico;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if(x.responseText != ""){
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("slcEspec").value = datosJSON.IDES;
				document.getElementById("inpMSemestre").value = datosJSON.SEMESTRE;
				document.getElementById("inpMPromedio").value = datosJSON.PROMEDIO;
				document.getElementById("inpIdPA").value = datosJSON.IDPA;
				
				if(datosJSON.SS == 1){
					document.getElementById("inpMSS").checked = true;	
				}
				if(datosJSON.CREDITOS == 1){
					document.getElementById("inpMCreditos").checked = true
				}
			}
		}
	}
	x.send(parametros);
}

function editaPA() {
	var idPA = document.getElementById("inpIdPA").value;
	var servicoSocial = (document.getElementById("inpMSS").checked)? 1: 0;
	var creditos = (document.getElementById("inpMCreditos").checked)? 1: 0;
	var promedio = (document.getElementById("inpMPromedio").value != "")? document.getElementById("inpMPromedio").value : 0;
	var semestre = (document.getElementById("inpMSemestre").value != "")? document.getElementById("inpMSemestre").value : 0;
	var idEsp = (document.getElementById("slcEspec").value != "")? document.getElementById("slcEspec").value : 0; 
	var parametros = "";
	parametros = conParam("idPA",idPA,parametros);
	parametros = conParam("servicoSocial",servicoSocial,parametros);
	parametros = conParam("creditos",creditos,parametros);
	parametros = conParam("promedio",promedio,parametros);
	parametros = conParam("semestre",semestre,parametros);
	parametros = conParam("idEsp",idEsp,parametros);

	var url = urlServidor+urlEditarPerfilAcademico;	
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
				toastr.success("actualizado con exito");
				$('#modalInfoPA').modal('hide');
				infoPerfilAcademico();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al actualizar");
			}
		}
	}
	x.send(parametros);
}

//Empresas
function cargaEmpresas(page){
	var nombre = document.getElementById("inpNombre").value;
	var rfc = document.getElementById("inpRFC").value;
	var per_page=10;
	var parametros = "";
	parametros = conParam("funcion",cargaEmpresas,parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("rfc",rfc,parametros);
	
	var url = urlServidor+urlcargaEmpresas;	
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

function infoEmpresa(){
	var idEmpresa = getVarsUrl();
	var parametros = "idEmpresa="+idEmpresa.id;
	var url = urlServidor+urlInfoEmpresa;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			document.getElementById("txtNombre").textContent = datosJSON.NOMBRE;
			document.getElementById("spRFC").textContent = datosJSON.RFC;
			document.getElementById("spDireccion").textContent = datosJSON.DIRECCION;
			document.getElementById("spTel").textContent = datosJSON.TEL;
			document.getElementById("spRamo").textContent = datosJSON.RAMO;		
		}
	}
	x.send(parametros);
}

function cargaProyectosEmpresa(page){
	var idEmpresa = getVarsUrl();
	var per_page=5;
	var parametros = "";
	parametros = conParam("funcion",cargaProyectosEmpresa,parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("idEmpresa",idEmpresa.id,parametros);
	
	var url = urlServidor+urlcargaProyectosEmpresa;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjax1").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function cargaAsesoresExternosEmpresa(page){
	var idEmpresa = getVarsUrl();
	var per_page=5;
	var parametros = "";
	parametros = conParam("funcion",cargaAsesoresExternosEmpresa,parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("idEmpresa",idEmpresa.id,parametros);
	
	var url = urlServidor+urlcargaAsesoresEEmpresa;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjax2").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function validarEmpresa(){
	var correcto =  true;
	if(document.getElementById("inpNombre").value == "") { document.getElementById("divNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpRFC").value == "") { document.getElementById("divRFC").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarEmpresa(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarEmpresa(){
	var nombre = document.getElementById("inpNombre").value;
	var rfc = document.getElementById("inpRFC").value;
	var direccion = document.getElementById("inpDireccion").value;
	var telefono = document.getElementById("inpTelefono").value;
	var ramo = document.getElementById("inpRamo").value;
	
	var parametros = "";
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("rfc",rfc,parametros);
	parametros = conParam("direccion",direccion,parametros);
	parametros = conParam("telefono",telefono,parametros);
	parametros = conParam("ramo",ramo,parametros);

	var url = urlServidor+urlAgregarEmpresa;	
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
				setTimeout(redireccionarEditarEmpresa, 2000, datosJSON.ID);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

function redireccionarEditarEmpresa(id){
	location.href ="http://localhost/MED/infoEmpresa.html?id="+id;
}

function infoEmpresaModal(){
	var idEmpresa = getVarsUrl();
	var parametros = "idEmpresa="+idEmpresa.id;
	var url = urlServidor+urlInfoEmpresa;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			document.getElementById("inpMNombre").value = datosJSON.NOMBRE;
			document.getElementById("inpMRFC").value = datosJSON.RFC;
			document.getElementById("inpMDireccion").value = datosJSON.DIRECCION;
			document.getElementById("inpMTelefono").value = datosJSON.TEL;
			document.getElementById("inpMRamo").value = datosJSON.RAMO;		
		}
	}
	x.send(parametros);
}

function validarEmpresaModal(){
	var correcto =  true;
	if(document.getElementById("inpMNombre").value == "") { document.getElementById("divMNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMRFC").value == "") { document.getElementById("divMRFC").classList.add("has-error"); correcto = false; }
	if (correcto){ editaEmpresa(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function editaEmpresa() {
	var idEmpresa = getVarsUrl();
	var nombre = document.getElementById("inpMNombre").value;
	var rfc = document.getElementById("inpMRFC").value;
	var direccion = document.getElementById("inpMDireccion").value;
	var telefono = document.getElementById("inpMTelefono").value;
	var ramo = document.getElementById("inpMRamo").value;

	var parametros = "";
	parametros = conParam("id",idEmpresa.id,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("rfc",rfc,parametros);
	parametros = conParam("direccion",direccion,parametros);
	parametros = conParam("telefono",telefono,parametros);
	parametros = conParam("ramo",ramo,parametros);

	var url = urlServidor+urlEditarEmpresa;	
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
				toastr.success("actualizado con exito");
				$('#modalInfoGeneral').modal('hide');
				infoEmpresa();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);

}

var idEmpresaEliminar = 0;
function eliminarEmpresa(){
	var parametros = "";
	parametros = conParam("idEmpresa",idEmpresaEliminar,parametros);

	var url = urlServidor+urlEliminarEmpresa;	
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
				toastr.success("eliminado con exito");
				$('#mdlConfirm').modal('hide');
				cargaEmpresas(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al eliminar");
			}
		}
	}
	x.send(parametros);
}

function cargalistaPeriodos(action){
	document.getElementById("slcPeriodos").innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlcargaPeriodos;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcPeriodos").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function cargalistaAsesoresEEmpresa(action){
	document.getElementById("slcAsesorE").innerHTML = "";
	var idproyecto = getVarsUrl();
	var parametros = "action="+action+"&idProyecto="+idproyecto.id;
	var url = urlServidor+urlcargaAsesorEE;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcAsesorE").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function cargalistaAsesoresEEmpresa2(action){
	document.getElementById("slcAsesorE").innerHTML = "";
	var idEmpresa = document.getElementById("slcEmpresa").value;
	var parametros = "action="+action+"&idEmpresa="+idEmpresa;
	var url = urlServidor+urlcargaAsesorEE2;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcAsesorE").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function cargaProyectos(page){
	var nombre = document.getElementById("inpNombre").value;
	var empresa = document.getElementById("inpEmpresa").value;
	var periodo = document.getElementById("slcPeriodos").value;
	var status = document.getElementById("slcStatus").value;
	var per_page = 10;
	var parametros = "";
	parametros = conParam("funcion",cargaProyectos,parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("empresa",empresa,parametros);
	parametros = conParam("periodo",periodo,parametros);
	parametros = conParam("status",status,parametros);

	var url = urlServidor+urlcargaProyectos;	
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

function infoProyecto(){
	var idproyecto = getVarsUrl();
	var parametros = "idProyecto="+idproyecto.id;
	var url = urlServidor+urlInfoProyecto;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			document.getElementById("spTitulo").textContent = datosJSON.TITULO;
			document.getElementById("spDescrip").textContent = datosJSON.DESCRIPCION;
			document.getElementById("spDepa").textContent = datosJSON.DEPARTAMENTO;
			document.getElementById("spEmpresa").textContent = datosJSON.EMPRESA;
			document.getElementById("spAE").textContent = datosJSON.ASESORE;		
			document.getElementById("spPeriodo").textContent = datosJSON.PERIODO;		
			document.getElementById("spStatus").textContent = datosJSON.STATUS;
			if(datosJSON.STATUS == "Activo"){
				document.getElementById("spStatus").classList.add("label-success");
			}else
			{
				document.getElementById("spStatus").classList.add("label-default");
			} 		
		}
	}
	x.send(parametros);
}

function infoConvenio(){
	var idproyecto = getVarsUrl();
	var parametros = "idProyecto="+idproyecto.id;
	var url = urlServidor+urlInfoConvenio;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if (x.responseText != "") {
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("spNoEstudiantes").textContent = datosJSON.NOESTUDIANTES;
				document.getElementById("spJornada").textContent = datosJSON.JORNADA;
				document.getElementById("spHorario").textContent = datosJSON.HORARIO;
				document.getElementById("spDuracion").textContent = datosJSON.DURACION;
			}
		}
	}
	x.send(parametros);
}

function cargaAlumnosProyecto(page){
	var idproyecto = getVarsUrl();
	var per_page=5;
	var parametros = "";
	parametros = conParam("funcion",cargaAlumnosProyecto,parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("idproyecto",idproyecto.id,parametros);
	
	var url = urlServidor+urlcargaAlumnosProyecto;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjax2").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function infoProyectoModal(){
	cargalistaPeriodos("lista");
	cargalistaAsesoresEEmpresa("lista");
	var idproyecto = getVarsUrl();
	var parametros = "idProyecto="+idproyecto.id;
	var url = urlServidor+urlInfoProyecto;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			document.getElementById("inpMNombre").value = datosJSON.TITULO;
			document.getElementById("inpMDesc").value = datosJSON.DESCRIPCION;
			document.getElementById("inpMDepa").value = datosJSON.DEPARTAMENTO;
			document.getElementById("inpMEmpresa").value = datosJSON.EMPRESA;
			document.getElementById("slcAsesorE").value = datosJSON.IDASESORE;		
			document.getElementById("slcPeriodos").value = datosJSON.IDPERIODO;		
			document.getElementById("slcMEstatus").value = datosJSON.STATUS; 		
		}
	}
	x.send(parametros);
}

function cargalistaEmpresas(action){
	document.getElementById("slcEmpresa").innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlcargaListaEmpresas;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcEmpresa").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function validarProyecto(){
	var correcto =  true;
	if(document.getElementById("inpTitulo").value == "") { document.getElementById("divTitulo").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcEmpresa").value == "") { document.getElementById("divEmpresa").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcPeriodos").value == "") { document.getElementById("divPeriodos").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarProyecto(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarProyecto(){
	var titulo = document.getElementById("inpTitulo").value;
	var descripcion = document.getElementById("inpDescripcion").value;
	var departamento = document.getElementById("inpDepartamento").value;
	var empresa = document.getElementById("slcEmpresa").value;
	var asesorE = (document.getElementById("slcAsesorE").value != "")? document.getElementById("slcAsesorE").value : 0;
	var periodo = document.getElementById("slcPeriodos").value;
	var status = document.getElementById("slcEstatus").value;

	var parametros = "";
	parametros = conParam("titulo",titulo,parametros);
	parametros = conParam("descripcion",descripcion,parametros);
	parametros = conParam("departamento",departamento,parametros);
	parametros = conParam("empresa",empresa,parametros);
	parametros = conParam("asesorE",asesorE,parametros);
	parametros = conParam("periodo",periodo,parametros);
	parametros = conParam("status",status,parametros);

	var url = urlServidor+urlAgregarProyecto;	
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
				setTimeout(redireccionarEditarProyecto, 2000, datosJSON.ID);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

function redireccionarEditarProyecto(id){
	location.href ="http://localhost/MED/infoProyecto.html?id="+id;
}