var x = new XMLHttpRequest();
var MENSAJE = "Desea eliminar el registro?";
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
var urlEditarProyecto = 'php/editarProyecto.php';
var urlEditarConvenio = 'php/editaConvenio.php';
var urlEliminarProyecto = 'php/eliminarProyecto.php';
var urlcargaAsesoresI = 'php/paginadoAsesoresI.php';
var urlAgregarAsesorI = 'php/agregarAsesorInterno.php';
var urlInfoAsesorI = 'php/infoAsesorInterno.php';
var urlcargaAlumnosAsesorI = 'php/paginadoAlumnosAsesorI.php';
var urlEditarAsesorI = 'php/editarAsesorInterno.php';
var urlcargaAlumnosSinAsignarAI = 'php/paginadoAlumnosSinAsignarAI.php';
var urlAsignarAlumnoAI = 'php/asignarAlumnoAI.php';
var urlcargaProyectosAsignar = 'php/paginadoProyectosAsignar.php';
var urlAsignarProyectoAlumno = 'php/asignarProyectoAlumno.php';
var urlcargaAsesoresIAsignar = 'php/paginadoAsesoresIAsignar.php';
var urlAsignarAsesorIAlumno = 'php/asignarAsesorIAlumno.php';
var urlcargaAsesoresEAsignar = 'php/paginadoAsesoresEAsignar.php';
var urlAsignarAsesorEAlumno = 'php/asignarAsesorEAlumno.php';
var urlcargaAsesoresE = 'php/paginadoAsesoresE.php';
var urlAgregarAsesorE = 'php/agregarAsesorExterno.php';
var urlInfoAsesorE = 'php/infoAsesorExterno.php';
var urlcargaAlumnosAsesorE = 'php/paginadoAlumnosAsesorE.php';
var urlEditarAsesorE =  'php/editarAsesorExterno.php';
var urlcargaAlumnosSinAsignarAE = 'php/paginadoAlumnosSinAsignarAE.php';
var urlAsignarAlumnoAE = 'php/asignarAlumnoAE.php';
var urlcargaReporteAlumnos = 'php/reporteAlumnos.php';
var urlcargaListaAsesoresInterno = 'php/listaAsesoresInternos.php';
var urlcargReporteEmpresas =  'php/reporteEmpresas.php';
var urlcargaReporteProyectos =  'php/reporteProyectos.php';
var urlAgregarDocumentoAlumno = 'php/agregarDocumentoAlumno.php';
var urlcargaDocumentosAlumno = 'php/paginadoDocumentosAlumno.php';
var urlDescargarArchivo = 'php/descargar.php';
var urlEliminarDocumentoAlumno = 'php/eliminarDocumentoAlumno.php';
var urlDenegarXAlumno = 'php/denagarXAlumno.php';
var urlEliminarAsesorInterno = 'php/eliminarAsesorInterno.php';
var urlEliminarAsesorExterno = 'php/eliminarAsesorExterno.php';

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

function cargalistaCarreras2(action,select){
	document.getElementById(select).innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlcargaCarreras;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById(select).innerHTML = x.responseText;			
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
	var periodo = (document.getElementById("slcPeriodos").value != "")? document.getElementById("slcPeriodos").value : 0;

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
	parametros = conParam("periodo",periodo,parametros);
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
	document.getElementById("idAlumnoMDoc").value = idAlumno.id; 
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
			if(datosJSON.GENERO.toLowerCase() == "m"){ document.getElementById("inpGeneroM").checked = true; }
			else{ document.getElementById("inpGeneroF").checked = true; }
			
			//limpiando elementos
			document.getElementById("spEmpresa").innerHTML = "";
			document.getElementById("spProyecto").innerHTML = "";
			document.getElementById("spAInterno").innerHTML = "";
			document.getElementById("spAExterno").innerHTML = "";
			document.getElementById("spPeriodo").innerHTML = "";

			if(datosJSON.IDEMPRESA != 0){
				document.getElementById("spEmpresa").innerHTML = "<button data-toggle='modal' data-target='#modalInfoEmpresa' onclick='infoEmpresaAlumno("+datosJSON.IDEMPRESA+")' class='label btn label-info2'><i class='fa fa-info-circle'></i> "+datosJSON.EMPRESA+"</button>";
			}
			if(datosJSON.IDPROY != 0){
				document.getElementById("spProyecto").innerHTML = "<button data-toggle='modal' data-target='#modalInfoProyecto' onclick='infoProyectoAlumno("+datosJSON.IDPROY+")' class='label btn label-info2'><i class='fa fa-info-circle'></i> "+datosJSON.PROYECTO+"</button>";
			}
			else{
				var boton = document.createElement("button");
				boton.textContent = "asignar";
				boton.setAttribute("class","label btn label-primary");
				boton.setAttribute("data-toggle","modal");
				boton.setAttribute("data-target","#modalAsignarProyecto");
				boton.setAttribute("onclick","cargaProyectosAsignar(1)");
				document.getElementById("spProyecto").appendChild(boton);
			}
			if(datosJSON.IDAI != 0){
				document.getElementById("spAInterno").innerHTML = "<button data-toggle='modal' data-target='#modalInfoAsesorInterno' onclick='infoAsesorIAlumno("+datosJSON.IDAI+")' class='label btn label-info2'><i class='fa fa-info-circle'></i> "+datosJSON.AI+"</button>";
			}
			else{
				var boton = document.createElement("button");
				boton.textContent = "asignar";
				boton.setAttribute("class","label btn label-primary");
				boton.setAttribute("data-toggle","modal");
				boton.setAttribute("data-target","#modalAsignarAsesorI");
				boton.setAttribute("onclick","cargalistaCarreras2('filtro','slcCarreras2'), cargaAsesoresIAsignar(1)");
				document.getElementById("spAInterno").appendChild(boton);
			}
			if(datosJSON.IDAE != 0){
				document.getElementById("spAExterno").innerHTML = "<button data-toggle='modal' data-target='#modalInfoAsesorExterno' onclick='infoAsesorEAlumno("+datosJSON.IDAE+")' class='label btn label-info2'><i class='fa fa-info-circle'></i> "+datosJSON.AE+"</button>";
			}
			else{
				var boton = document.createElement("button");
				boton.textContent = "asignar";
				boton.setAttribute("class","label btn label-primary");
				boton.setAttribute("data-toggle","modal");
				boton.setAttribute("data-target","#modalAsignarAsesorE");
				boton.setAttribute("onclick","cargalistaEmpresas2('filtro','slcEmpresa1'), cargaAsesoresEAsignar(1)");
				document.getElementById("spAExterno").appendChild(boton);
			}
			if(datosJSON.IDPERIODO != 0){
				document.getElementById("spPeriodo").textContent = datosJSON.PERIODO;
				document.getElementById("spPeriodo2").textContent = datosJSON.PERIODO;
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
	cargalistaPeriodos("lista");
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
			document.getElementById("slcPeriodos").value = datosJSON.IDPERIODO;
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
	var periodo = (document.getElementById("slcPeriodos").value != "")? document.getElementById("slcPeriodos").value : 0;

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
	parametros = conParam("periodo",periodo,parametros);

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
	parametros = conParam("funcion","cargaEmpresas",parametros);
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
	parametros = conParam("funcion","cargaProyectosEmpresa",parametros);
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
	parametros = conParam("funcion","cargaAsesoresExternosEmpresa",parametros);
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
	parametros = conParam("funcion","cargaProyectos",parametros);
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
			document.getElementById("spAI").textContent = datosJSON.ASESORI;
			document.getElementById("spAE").textContent = datosJSON.ASESORE;			
			document.getElementById("spPeriodo").textContent = datosJSON.PERIODO;		
			document.getElementById("spStatus").textContent = datosJSON.STATUS;
			if(datosJSON.STATUS == "Activo"){
				document.getElementById("spStatus").className = "label label-success";
			}else
			{
				document.getElementById("spStatus").className = "label label-default";
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
	parametros = conParam("funcion","cargaAlumnosProyecto",parametros);
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
	cargalistaAsesoresInterno("lista","slcAsesorI");
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
			document.getElementById("slcAsesorI").value = datosJSON.IDASESORI;
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

function cargalistaEmpresas2(action,select){
	document.getElementById(select).innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlcargaListaEmpresas;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById(select).innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function validarProyecto(){
	var correcto =  true;
	if(document.getElementById("inpTitulo").value == "") { document.getElementById("divTitulo").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcEmpresa").value == "") { document.getElementById("divEmpresa").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcPeriodos").value == "") { document.getElementById("divPeriodos").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarProyecto(true); }
	else { toastr.error("Parametros Incompletos"); } 
}

function validarProyectoEmpresa(){
	var correcto =  true;
	if(document.getElementById("inpTitulo").value == "") { document.getElementById("divMTitulo").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcEmpresa").value == "") { document.getElementById("divMEmpresa").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcPeriodos").value == "") { document.getElementById("divSclPeriodo").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarProyecto(false); }
	else { toastr.error("Parametros Incompletos"); } 
}


function guardarProyecto(redireccionar){
	var titulo = document.getElementById("inpTitulo").value;
	var descripcion = document.getElementById("inpDescripcion").value;
	var departamento = document.getElementById("inpDepartamento").value;
	var empresa = document.getElementById("slcEmpresa").value;
	var asesorE = (document.getElementById("slcAsesorE").value != "")? document.getElementById("slcAsesorE").value : 0;
	var asesorI = (document.getElementById("slcAsesorI").value != "")? document.getElementById("slcAsesorI").value : 0;
	var periodo = document.getElementById("slcPeriodos").value;
	var status = document.getElementById("slcEstatus").value;

	var parametros = "";
	parametros = conParam("titulo",titulo,parametros);
	parametros = conParam("descripcion",descripcion,parametros);
	parametros = conParam("departamento",departamento,parametros);
	parametros = conParam("empresa",empresa,parametros);
	parametros = conParam("asesorE",asesorE,parametros);
	parametros = conParam("asesorI",asesorI,parametros);
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

				if(redireccionar) setTimeout(redireccionarEditarProyecto, 2000, datosJSON.ID);
				else cargaProyectosEmpresa(1);
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

function redireccionarEditarAsesorI(id){
	location.href ="http://localhost/MED/infoAsesorI.html?id="+id;
}

function redireccionarEditarAsesorE(id){
	location.href ="http://localhost/MED/infoAsesorE.html?id="+id;
}

function editaProyecto() {
	var idProyecto = getVarsUrl();
	var titulo = document.getElementById("inpMNombre").value;
	var descripcion = document.getElementById("inpMDesc").value;
	var departamento = document.getElementById("inpMDepa").value;
	var asesorE = (document.getElementById("slcAsesorE").value != "")? document.getElementById("slcAsesorE").value : 0;
	var asesorI = (document.getElementById("slcAsesorI").value != "")? document.getElementById("slcAsesorI").value : 0;
	var periodo = document.getElementById("slcPeriodos").value;
	var status = document.getElementById("slcMEstatus").value;

	var parametros = "";
	parametros = conParam("idProyecto",idProyecto.id,parametros);
	parametros = conParam("titulo",titulo,parametros);
	parametros = conParam("descripcion",descripcion,parametros);
	parametros = conParam("departamento",departamento,parametros);
	parametros = conParam("asesorE",asesorE,parametros);
	parametros = conParam("asesorI",asesorI,parametros);
	parametros = conParam("periodo",periodo,parametros);
	parametros = conParam("status",status,parametros);


	var url = urlServidor+urlEditarProyecto;	
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
				infoProyecto();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

function validarProyectoModal(){
	var correcto =  true;
	if(document.getElementById("inpMNombre").value == "") { document.getElementById("divMNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcPeriodos").value == "") { document.getElementById("divPeriodos").classList.add("has-error"); correcto = false; }
	if (correcto){ editaProyecto(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function infoConvenioModal(){
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
				document.getElementById("inpIdConvenio").value = datosJSON.ID;
				document.getElementById("inpMNoE").value = datosJSON.NOESTUDIANTES;
				document.getElementById("inpMJornada").value = datosJSON.JORNADA;
				document.getElementById("inpMHorario").value = datosJSON.HORARIO;
				document.getElementById("inpMDuracion").value = datosJSON.DURACION;
			}
		}
	}
	x.send(parametros);
}

function editaConvenio() {
	var idConvenio = document.getElementById("inpIdConvenio").value;
	var NoEstudiantes = (document.getElementById("inpMNoE").value != "")? document.getElementById("inpMNoE").value : 0;
	var jornada = document.getElementById("inpMJornada").value;
	var horario = document.getElementById("inpMHorario").value;
	var duracion = document.getElementById("inpMDuracion").value;

	var parametros = "";
	parametros = conParam("idConvenio",idConvenio,parametros);
	parametros = conParam("NoEstudiantes",NoEstudiantes,parametros);
	parametros = conParam("jornada",jornada,parametros);
	parametros = conParam("horario",horario,parametros);
	parametros = conParam("duracion",duracion,parametros);

	var url = urlServidor+urlEditarConvenio;	
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
				$('#modalConvenio').modal('hide');
				infoConvenio();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al actualizar");
			}
		}
	}
	x.send(parametros);
}

var idProyectoEliminar = 0;
function eliminarProyecto(){
	var parametros = "";
	parametros = conParam("idProyecto",idProyectoEliminar,parametros);

	var url = urlServidor+urlEliminarProyecto;	
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
				cargaProyectos(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al eliminar");
			}
		}
	}
	x.send(parametros);
}

function cargaAsesoresI(page){
	var nombre = document.getElementById("inpNombre").value;
	var carrera = document.getElementById("slcCarreras").value;
	var per_page=10;
	var parametros = "";
	parametros = conParam("funcion","cargaAsesoresI",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("carrera",carrera,parametros);

	var url = urlServidor+urlcargaAsesoresI;	
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

function cargalistaCarrerasModal(action){
	document.getElementById("slcMCarreras").innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlcargaCarreras;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("slcMCarreras").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function validarAsesorInterno() {
	var correcto =  true;
	if(document.getElementById("inpMNombre").value == "") { document.getElementById("divMNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMApellidoP").value == "") { document.getElementById("divMApellidoP").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarAsesorInterno(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarAsesorInterno(){
	var nombre = document.getElementById("inpMNombre").value;
	var apaterno = document.getElementById("inpMApellidoP").value;
	var amaterno = document.getElementById("inpMApellidoM").value;
	var especialidad = document.getElementById("inpMEspecialidad").value;
	var carrera = (document.getElementById("slcMCarreras").value != "")? document.getElementById("slcMCarreras").value : 0;

	var parametros = "";
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("apaterno",apaterno,parametros);
	parametros = conParam("amaterno",amaterno,parametros);
	parametros = conParam("especialidad",especialidad,parametros);
	parametros = conParam("carrera",carrera,parametros);

	var url = urlServidor+urlAgregarAsesorI;	
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
				$('#modalNuevoAsesor').modal('hide');
				cargaAsesoresI(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

function infoAsesorI(){
	var idAsesorI = getVarsUrl();
	var parametros = "idAsesor="+idAsesorI.id;
	var url = urlServidor+urlInfoAsesorI;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if (x.responseText != "") {
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("spNombre").textContent = datosJSON.NOMBRE;
				document.getElementById("spAP").textContent = datosJSON.AP;
				document.getElementById("spAM").textContent = datosJSON.AM;
				document.getElementById("spEspecialidad").textContent = datosJSON.ESPECIALIDAD;
				document.getElementById("spCarrera").textContent = datosJSON.CARRERA;
			}
		}
	}
	x.send(parametros);
}

function cargaAlumnosAsesorI(page){
	var idAsesor = getVarsUrl();
	var per_page=5;
	var parametros = "";
	parametros = conParam("funcion","cargaAlumnosAsesorI",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("idAsesor",idAsesor.id,parametros);
	
	var url = urlServidor+urlcargaAlumnosAsesorI;	
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

function infoAsesorIModal(){
	cargalistaCarreras("lista");
	var idAsesorI = getVarsUrl();
	var parametros = "idAsesor="+idAsesorI.id;
	var url = urlServidor+urlInfoAsesorI;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if (x.responseText != "") {
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("inpMNombre").value = datosJSON.NOMBRE;
				document.getElementById("inpMAP").value = datosJSON.AP;
				document.getElementById("inpMAM").value = datosJSON.AM;
				document.getElementById("inpMEspecialidad").value = datosJSON.ESPECIALIDAD;
				document.getElementById("slcCarreras").value = datosJSON.IDCARRERA;
			}
		}
	}
	x.send(parametros);
}

function validarAsesorIModal() {
	var correcto =  true;
	if(document.getElementById("inpMNombre").value == "") { document.getElementById("divMNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMAP").value == "") { document.getElementById("divMAp").classList.add("has-error"); correcto = false; }
	if (correcto){ editaAsesorI(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function editaAsesorI() {
	var idAsesor = getVarsUrl();
	var nombre = document.getElementById("inpMNombre").value;
	var apaterno = document.getElementById("inpMAP").value;
	var amaterno = document.getElementById("inpMAM").value;
	var especialidad = document.getElementById("inpMEspecialidad").value;
	var carrera = (document.getElementById("slcCarreras").value != "")? document.getElementById("slcCarreras").value : 0;

	var parametros = "";
	parametros = conParam("id",idAsesor.id,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("apaterno",apaterno,parametros);
	parametros = conParam("amaterno",amaterno,parametros);
	parametros = conParam("especialidad",especialidad,parametros);
	parametros = conParam("carrera",carrera,parametros);

	var url = urlServidor+urlEditarAsesorI;	
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
				infoAsesorI();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

function cargaAlumnosSinAsignarAI(page){
	var per_page=8;
	var parametros = "";
	parametros = conParam("funcion","cargaAlumnosSinAsignarAI",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	
	var url = urlServidor+urlcargaAlumnosSinAsignarAI;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjax3").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function asignarAlumnoAI(idAlumno,boton){
	var idAsesor = getVarsUrl();
	

	var parametros = "";
	parametros = conParam("idAsesor",idAsesor.id,parametros);
	parametros = conParam("idAlumno",idAlumno,parametros);

	var url = urlServidor+urlAsignarAlumnoAI;	
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
				toastr.success("asignado con exito");
				boton.setAttribute("onclick","");
				boton.className = "btn btn-success";
				boton.children[0].className = "fa fa-check-square";
				cargaAlumnosAsesorI(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al asignar");
			}
		}
	}
	x.send(parametros);
}

function cargaProyectosAsignar(page){
	var nombre = document.getElementById("inpNombre").value;
	var empresa = document.getElementById("inpEmpresa").value;
	var per_page = 10;
	var parametros = "";
	parametros = conParam("funcion","cargaProyectosAsignar",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("empresa",empresa,parametros);

	var url = urlServidor+urlcargaProyectosAsignar;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjaxProyecto").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function asignarProyectoAlumno(idProyecto,boton){
	var idAlumno = getVarsUrl();
	
	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("idProyecto",idProyecto,parametros);

	var url = urlServidor+urlAsignarProyectoAlumno;	
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
				toastr.success("asignado con exito");
				boton.setAttribute("onclick","");
				boton.className = "btn btn-success";
				boton.children[0].className = "fa fa-check-square";
				var botones = document.getElementsByClassName("asignarDes");
				for (var i = 0; i < botones.length; i++) {
					botones[i].disabled = true;
				}
				infoAlumno();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al asignar");
			}
		}
	}
	x.send(parametros);
}

function cargaAsesoresIAsignar(page){
	var nombre = document.getElementById("inpNombreAseIMoAs").value;
	var carrera = document.getElementById("slcCarreras2").value;
	var per_page = 10;
	var parametros = "";
	parametros = conParam("funcion","cargaAsesoresIAsignar",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("carrera",carrera,parametros);

	var url = urlServidor+urlcargaAsesoresIAsignar;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjaxAsesorInterno").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function asignarAsesorIAlumno(idAsesor,boton){
	var idAlumno = getVarsUrl();
	
	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("idAsesor",idAsesor,parametros);

	var url = urlServidor+urlAsignarAsesorIAlumno;	
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
				toastr.success("asignado con exito");
				boton.setAttribute("onclick","");
				boton.className = "btn btn-success";
				boton.children[0].className = "fa fa-check-square";
				var botones = document.getElementsByClassName("asignarDes");
				for (var i = 0; i < botones.length; i++) {
					botones[i].disabled = true;
				}
				infoAlumno();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al asignar");
			}
		}
	}
	x.send(parametros);
}

function cargaAsesoresEAsignar(page){
	var nombre = document.getElementById("inpNombreAseEMoAs").value;
	var empresa = document.getElementById("slcEmpresa1").value;
	var per_page = 10;
	var parametros = "";
	parametros = conParam("funcion","cargaAsesoresEAsignar",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("empresa",empresa,parametros);

	var url = urlServidor+urlcargaAsesoresEAsignar;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjaxAsesorExterno").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function asignarAsesorEAlumno(idAsesor,boton){
	var idAlumno = getVarsUrl();
	
	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("idAsesor",idAsesor,parametros);

	var url = urlServidor+urlAsignarAsesorEAlumno;	
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
				toastr.success("asignado con exito");
				boton.setAttribute("onclick","");
				boton.className = "btn btn-success";
				boton.children[0].className = "fa fa-check-square";
				var botones = document.getElementsByClassName("asignarDes");
				for (var i = 0; i < botones.length; i++) {
					botones[i].disabled = true;
				}
				infoAlumno();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al asignar");
			}
		}
	}
	x.send(parametros);
}

function cargaAsesoresE(page){
	var nombre = document.getElementById("inpNombre").value;
	var empresa = document.getElementById("slcEmpresas").value;
	var per_page=10;
	var parametros = "";
	parametros = conParam("funcion","cargaAsesoresE",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("empresa",empresa,parametros);

	var url = urlServidor+urlcargaAsesoresE;	
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

function validarAsesorExterno() {
	var correcto =  true;
	if(document.getElementById("inpMNombre").value == "") { document.getElementById("divMNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMApellidoP").value == "") { document.getElementById("divMApellidoP").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcMEmpresa").value == "") { document.getElementById("divslcMEmpresa").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarAsesorExterno(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarAsesorExterno(){
	var nombre = document.getElementById("inpMNombre").value;
	var apaterno = document.getElementById("inpMApellidoP").value;
	var amaterno = document.getElementById("inpMApellidoM").value;
	var puesto = document.getElementById("inpMPuesto").value;
	var empresa = (document.getElementById("slcMEmpresa").value != "")? document.getElementById("slcMEmpresa").value : 0;

	var parametros = "";
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("apaterno",apaterno,parametros);
	parametros = conParam("amaterno",amaterno,parametros);
	parametros = conParam("puesto",puesto,parametros);
	parametros = conParam("empresa",empresa,parametros);

	var url = urlServidor+urlAgregarAsesorE;	
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
				$('#modalNuevoAsesor').modal('hide');
				cargaAsesoresE(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

//Info Asesor Externo
function infoAsesorE(){
	var idAsesorE = getVarsUrl();
	var parametros = "idAsesor="+idAsesorE.id;
	var url = urlServidor+urlInfoAsesorE;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if (x.responseText != "") {
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("spNombre").textContent = datosJSON.NOMBRE;
				document.getElementById("spAP").textContent = datosJSON.AP;
				document.getElementById("spAM").textContent = datosJSON.AM;
				document.getElementById("spPuesto").textContent = datosJSON.PUESTO;
				document.getElementById("spEmpresa").textContent = datosJSON.EMPRESA;
			}
		}
	}
	x.send(parametros);
}

function cargaAlumnosAsesorE(page){
	var idAsesor = getVarsUrl();
	var per_page=5;
	var parametros = "";
	parametros = conParam("funcion","cargaAlumnosAsesorE",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("idAsesor",idAsesor.id,parametros);
	
	var url = urlServidor+urlcargaAlumnosAsesorE;	
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

function infoAsesorEModal(){
	cargalistaEmpresas2("lista","slcMEmpresas");
	var idAsesorE = getVarsUrl();
	var parametros = "idAsesor="+idAsesorE.id;
	var url = urlServidor+urlInfoAsesorE;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if (x.responseText != "") {
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("inpMNombre").value = datosJSON.NOMBRE;
				document.getElementById("inpMAP").value = datosJSON.AP;
				document.getElementById("inpMAM").value = datosJSON.AM;
				document.getElementById("inpMPuesto").value = datosJSON.PUESTO;
				document.getElementById("slcMEmpresas").value = datosJSON.IDEMPRESA;
			}
		}
	}
	x.send(parametros);
}

function validarAsesorEModal() {
	var correcto =  true;
	if(document.getElementById("inpMNombre").value == "") { document.getElementById("divMNombre").classList.add("has-error"); correcto = false; }
	if(document.getElementById("inpMAP").value == "") { document.getElementById("divMAp").classList.add("has-error"); correcto = false; }
	if(document.getElementById("slcMEmpresas").value == "") { document.getElementById("divMEmpresa").classList.add("has-error"); correcto = false; }
	if (correcto){ editaAsesorE(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function editaAsesorE() {
	var idAsesor = getVarsUrl();
	var nombre = document.getElementById("inpMNombre").value;
	var apaterno = document.getElementById("inpMAP").value;
	var amaterno = document.getElementById("inpMAM").value;
	var puesto = document.getElementById("inpMPuesto").value;
	var empresa = (document.getElementById("slcMEmpresas").value != "")? document.getElementById("slcMEmpresas").value : 0;

	var parametros = "";
	parametros = conParam("id",idAsesor.id,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("apaterno",apaterno,parametros);
	parametros = conParam("amaterno",amaterno,parametros);
	parametros = conParam("puesto",puesto,parametros);
	parametros = conParam("empresa",empresa,parametros);

	var url = urlServidor+urlEditarAsesorE;	
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
				infoAsesorE();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al guardar");
			}
		}
	}
	x.send(parametros);
}

function cargaAlumnosSinAsignarAE(page){
	var per_page=8;
	var parametros = "";
	parametros = conParam("funcion","cargaAlumnosSinAsignarAE",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	
	var url = urlServidor+urlcargaAlumnosSinAsignarAE;	
	x.open('POST',url,true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjax3").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function asignarAlumnoAE(idAlumno,boton){
	var idAsesor = getVarsUrl();
	
	var parametros = "";
	parametros = conParam("idAsesor",idAsesor.id,parametros);
	parametros = conParam("idAlumno",idAlumno,parametros);

	var url = urlServidor+urlAsignarAlumnoAE;	
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
				toastr.success("asignado con exito");
				boton.setAttribute("onclick","");
				boton.className = "btn btn-success";
				boton.children[0].className = "fa fa-check-square";
				cargaAlumnosAsesorE(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error("error al asignar");
			}
		}
	}
	x.send(parametros);
}

function fnExcelReport()
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('tblAlumnos'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"prueba.ods");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
}

function exportToExcel(nombre){
	var tab_text = "";
	var uri = 'data:application/vnd.ms-excel;base64,';
	var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'; 
	var base64 = function(s) {
	    return window.btoa(unescape(encodeURIComponent(s)))
	};

	var format = function(s, c) {
	    return s.replace(/{(\w+)}/g, function(m, p) {
	        return c[p];
	    })
	};

	var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
	var textRange; var j=0;
	tab = document.getElementById('tblReporte'); // id of table

	for(j = 0 ; j < tab.rows.length - 1 ; j++) 
	{     
		for(i = 0 ; i < tab.rows[j].cells.length - 2; i++){
			tab_text=tab_text+"<td>"+tab.rows[j].cells[i].innerHTML+"</td>";
		}
	    //console.log(tab.rows[j]);
	    //tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
	    tab_text=tab_text+"</tr>";
	}

	tab_text=tab_text+"</table>";
	tab_text= tab_text.replace(/<a[^>]*>|<\/a>/g, "");//remove if u want links in your table
	tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
	tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

	var ctx = {
	    worksheet : 'Worksheet',
	    table : tab_text
	}


	var link = document.createElement("a");
	link.download = nombre+".xls";
	link.href = uri + base64(format(template, ctx));
	link.click();
}

function cargaReporteAlumnos(page){
	var noControl=document.getElementById("inpNoControl").value;
	var nombre = document.getElementById("inpNombre").value;
	var carrera = document.getElementById("slcCarreras").value;
	var status = document.getElementById("slcStatus").value;
	var per_page=document.getElementById("slcRegistros").value;
	var periodo = document.getElementById("slcPeriodos").value;
	var empresa = document.getElementById("slcEmpresas").value;
	var proyecto = document.getElementById("slcProyectos").value;
	
	var parametros = "";
	parametros = conParam("funcion","cargaReporteAlumnos",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("noControl",noControl,parametros);
	parametros = conParam("carrera",carrera,parametros);
	parametros = conParam("status",status,parametros);
	parametros = conParam("periodo",periodo,parametros);
	parametros = conParam("empresa",empresa,parametros);
	parametros = conParam("proyecto",proyecto,parametros);


	var url = urlServidor+urlcargaReporteAlumnos;	
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

function cargalistaAsesoresInterno(action,select){
	document.getElementById(select).innerHTML = "";
	var parametros = "action="+action;
	var url = urlServidor+urlcargaListaAsesoresInterno;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById(select).innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function cargaReporteEmpresas(page){
	var nombre = document.getElementById("inpNombre").value;
	var rfc = document.getElementById("inpRFC").value;
	var per_page = document.getElementById("slcRegistros").value;
	var ramo = document.getElementById("inpRamo").value;
	var proyecto = document.getElementById("slcProyectos").value;
	
	var parametros = "";
	parametros = conParam("funcion","cargaReporteEmpresas",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("rfc",rfc,parametros);
	parametros = conParam("ramo",ramo,parametros);
	parametros = conParam("proyecto",proyecto,parametros);
	
	var url = urlServidor+urlcargReporteEmpresas;	
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

function cargaReporteProyectos(page){
	var nombre = document.getElementById("inpNombre").value;
	var empresa = document.getElementById("inpEmpresa").value;
	var periodo = document.getElementById("slcPeriodos").value;
	var status = document.getElementById("slcStatus").value;
	var per_page = document.getElementById("slcRegistros").value;
	var alumnos = document.getElementById("slcAlumnos").value;

	var parametros = "";
	parametros = conParam("funcion","cargaReporteProyectos",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("nombre",nombre,parametros);
	parametros = conParam("empresa",empresa,parametros);
	parametros = conParam("periodo",periodo,parametros);
	parametros = conParam("status",status,parametros);
	parametros = conParam("alumnos",alumnos,parametros);

	var url = urlServidor+urlcargaReporteProyectos;	
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

function validarArchivoAlumno(){
	var correcto =  true;
	if(document.getElementById("inpMArchivo").value == "") { document.getElementById("divMArchivo").classList.add("has-error"); correcto = false; }
	if (correcto){ guardarDocumentoAlumno(); }
	else { toastr.error("Parametros Incompletos"); } 
}

function guardarDocumentoAlumno() {
	/*var idAlumno = getVarsUrl();
	var fase = document.getElementById("inpMFase").value;
	var archivo = document.getElementById("inpMArchivo").files[0];

	var parametros = "";
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	parametros = conParam("fase",fase,parametros);
	parametros = conParam("archivo",archivo,parametros);*/
	var formData = new FormData(document.getElementById('formDocs'));
	var url = urlServidor+urlAgregarDocumentoAlumno;	
	x.open('POST',url,true);
	//x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//x.setRequestHeader("Content-Type", "multipart/form-data");

	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			var datosJSON = JSON.parse(x.responseText);
			
			if(datosJSON.STATUS == 0)
			{
				toastr.success("guardado con exito");
				$('#mdlAgregarDoc').modal('hide');
				cargaDocumentosAlumno(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
				$('#mdlAgregarDoc').modal('hide');
			}
		}
	}
	x.send(formData);
}

//limpia inputs recibe arreglo de string con ids de inputs
function limpiarinputs(inputs){
	for(var i=0; i<inputs.length; i++)
	{
        document.getElementById(inputs[i]).value = ""; 
    }
}

function cargaDocumentosAlumno(page){
	var idAlumno = getVarsUrl();
	var per_page = 5;
	var parametros = "";
	parametros = conParam("funcion","cargaDocumentosAlumno",parametros);
	parametros = conParam("page",page,parametros);
	parametros = conParam("per_page",per_page,parametros);
	parametros = conParam("idAlumno",idAlumno.id,parametros);
	
	var url = urlServidor+urlcargaDocumentosAlumno;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			document.getElementById("contenidoAjaxDocs").innerHTML = x.responseText;			
		}
	}
	x.send(parametros);
}

function descargarArchivo(nombreArchivo,carpetaId){
	var parametros = "";
	parametros = conParam("nombreArchivo",nombreArchivo,parametros);
	parametros = conParam("carpetaId",carpetaId,parametros);
	var url = urlServidor+urlDescargarArchivo;	
	document.location = url+"?"+parametros;
}

function confirmDialog(message, onConfirm,param){
    var fClose = function(){
		  modal.modal("hide");
    };
    var modal = $("#confirmModal");
    modal.modal("show");
    $("#confirmMessage").empty().append(message);
    document.getElementById("confirmOk").setAttribute("onclick",onConfirm+'("'+param+'")');
    $("#confirmCancel").unbind().one("click", fClose);
}

function eliminarDocumento(idDoc) {
	var parametros = "";
	parametros = conParam("idDoc",idDoc,parametros);

	var url = urlServidor+urlEliminarDocumentoAlumno;	
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
				toastr.success(datosJSON.MENSAJE);
				cargaDocumentosAlumno(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
			}
		}
	}
	x.send(parametros);
}

function denegarXAlumno(tipo){
	var idAlumno = getVarsUrl();
	var parametros = "";
	parametros = conParam("id",idAlumno.id,parametros);
	parametros = conParam("tipo",tipo,parametros);

	var url = urlServidor+urlDenegarXAlumno;	
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
				toastr.success(datosJSON.MENSAJE);
				infoAlumno();
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
			}
		}
	}
	x.send(parametros);
}

function infoProyectoAlumno(idProyecto){
	var parametros = "idProyecto="+idProyecto;
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
			document.getElementById("spEmpresaProyecto").textContent = datosJSON.EMPRESA;
			document.getElementById("spAI").textContent = datosJSON.ASESORI;
			document.getElementById("spAE").textContent = datosJSON.ASESORE;			
			document.getElementById("spPeriodoProyecto").textContent = datosJSON.PERIODO;		
			document.getElementById("spStatusProyecto").textContent = datosJSON.STATUS;
			if(datosJSON.STATUS == "Activo"){
				document.getElementById("spStatusProyecto").className = "label label-success";
			}else
			{
				document.getElementById("spStatusProyecto").className = "label label-default";
			}
			document.getElementById("linkDetalleProyecto").href = "infoProyecto.html?id="+idProyecto; 		
		}
	}
	x.send(parametros);
}

function infoAsesorIAlumno(idAsesor){
	var parametros = "idAsesor="+idAsesor;
	var url = urlServidor+urlInfoAsesorI;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if (x.responseText != "") {
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("spNombrAI").textContent = datosJSON.NOMBRE;
				document.getElementById("spAPAI").textContent = datosJSON.AP;
				document.getElementById("spAMAI").textContent = datosJSON.AM;
				document.getElementById("spEspecialidadAI").textContent = datosJSON.ESPECIALIDAD;
				document.getElementById("spCarreraAI").textContent = datosJSON.CARRERA;
				document.getElementById("linkDetalleAsesorInterno").href = "infoAsesorI.html?id="+idAsesor;
			}
		}
	}
	x.send(parametros);
}

function infoAsesorEAlumno(idAsesor){
	var parametros = "idAsesor="+idAsesor;
	var url = urlServidor+urlInfoAsesorE;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			console.log(x.responseText);
			if (x.responseText != "") {
				var datosJSON = JSON.parse(x.responseText);
				document.getElementById("spNombreAE").textContent = datosJSON.NOMBRE;
				document.getElementById("spAPAE").textContent = datosJSON.AP;
				document.getElementById("spAMAE").textContent = datosJSON.AM;
				document.getElementById("spPuestoAE").textContent = datosJSON.PUESTO;
				document.getElementById("spEmpresaAE").textContent = datosJSON.EMPRESA;
				document.getElementById("linkDetalleAsesorExterno").href = "infoAsesorE.html?id="+idAsesor;
			}
		}
	}
	x.send(parametros);
}

function infoEmpresaAlumno(idEmpresa){
	var parametros = "idEmpresa="+idEmpresa;
	var url = urlServidor+urlInfoEmpresa;	
	x.open('POST',url,false);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	x.onreadystatechange = function() 
	{
        if(x.status == 200 && x.readyState == 4)
		{
			var datosJSON = JSON.parse(x.responseText);
			document.getElementById("txtNombreE").textContent = datosJSON.NOMBRE;
			document.getElementById("spRFCE").textContent = datosJSON.RFC;
			document.getElementById("spDireccionE").textContent = datosJSON.DIRECCION;
			document.getElementById("spTelE").textContent = datosJSON.TEL;
			document.getElementById("spRamoE").textContent = datosJSON.RAMO;
			document.getElementById("linkDetalleEmpresa").href = "infoEmpresa.html?id="+idEmpresa;		
		}
	}
	x.send(parametros);
}

function denegarAlumnoAsesorI(idAlumno){
	var parametros = "";
	parametros = conParam("id",idAlumno,parametros);
	parametros = conParam("tipo","AsesorInterno",parametros);

	var url = urlServidor+urlDenegarXAlumno;	
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
				toastr.success(datosJSON.MENSAJE);
				cargaAlumnosAsesorI(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
			}
		}
	}
	x.send(parametros);
}

function denegarAlumnoAsesorE(idAlumno){
	var parametros = "";
	parametros = conParam("id",idAlumno,parametros);
	parametros = conParam("tipo","AsesorExterno",parametros);

	var url = urlServidor+urlDenegarXAlumno;	
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
				toastr.success(datosJSON.MENSAJE);
				cargaAlumnosAsesorE(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
			}
		}
	}
	x.send(parametros);
}

function eliminarAsesorInterno(idAsesor){
	var parametros = "";
	parametros = conParam("idAsesor",idAsesor,parametros);

	var url = urlServidor+urlEliminarAsesorInterno;	
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
				toastr.success(datosJSON.MENSAJE);
				cargaAsesoresI(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
			}
		}
	}
	x.send(parametros);
}

function eliminarAsesorExterno(idAsesor){
	var parametros = "";
	parametros = conParam("idAsesor",idAsesor,parametros);

	var url = urlServidor+urlEliminarAsesorExterno;	
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
				toastr.success(datosJSON.MENSAJE);
				cargaAsesoresE(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
			}
		}
	}
	x.send(parametros);
}

function denegarAlumnoProyecto(idAlumno){
	var parametros = "";
	parametros = conParam("id",idAlumno,parametros);
	parametros = conParam("tipo","Proyecto",parametros);

	var url = urlServidor+urlDenegarXAlumno;	
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
				toastr.success(datosJSON.MENSAJE);
				cargaAlumnosProyecto(1);
			}
			if(datosJSON.STATUS == 1)
			{
				toastr.error(datosJSON.MENSAJE);
			}
		}
	}
	x.send(parametros);
}

function agregarProyectoModal(){
	var idproyecto = getVarsUrl();
	cargalistaEmpresas("lista");
	cargalistaPeriodos("lista");
	cargalistaAsesoresInterno("lista","slcAsesorI");
	document.getElementById("slcEmpresa").value = idproyecto.id;
	cargalistaAsesoresEEmpresa2('lista');
}
