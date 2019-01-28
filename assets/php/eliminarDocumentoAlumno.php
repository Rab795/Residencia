<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idDoc = intval($_POST["idDoc"]);

	//Consulta ruta y carpeta
	$sqlSelect = "SELECT doc_nombre, doc_idAlumno FROM DocumentosAlumno WHERE doc_id = $idDoc";
	$querySelect = mysqli_query($conectado,$sqlSelect);
	$datos = mysqli_fetch_array($querySelect,MYSQLI_ASSOC);
	$idAlumno = $datos['doc_idAlumno'];
	$nombreArchivo = $datos['doc_nombre'];
	$file = '../../archivos/'.$idAlumno.'/'.$nombreArchivo;

	//Eliminar registro
	if(is_file($file)){
		chmod($file,0777);
		if(unlink($file)){
			// Eliminar registro
		    $sql = "DELETE FROM DocumentosAlumno WHERE doc_id = $idDoc";
		    
		    $query = mysqli_query($conectado,$sql);
		    // if product has been added successfully
		    if ($query) {
		        echo '{
						"STATUS" : 0,
						"MENSAJE" : "Eliminado con exito"
						}';
		    } else {
		        echo '{
						"STATUS" : 1,
						"MENSAJE" : "No se pudo eliminar el registro"
						}';
						
		    }
		}else{
			echo '{
						"STATUS" : 1,
						"MENSAJE" : "No se pudo eliminar el archivo"
						}';
		}
	}
?>			