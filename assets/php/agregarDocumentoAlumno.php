<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

 	$idAlumno = intval($_POST["idAlumno"]);
 	$fase =  $_POST["fase"];
 	$archivoNombre = $_FILES["archivo"]["name"];

 	if($_FILES["archivo"]["error"]>0){
 		echo '{
				"STATUS" : 1,
				"MENSAJE" : "Error al cargar archivo"
				}';
 	}else{
 		// REGISTER data into database
	    $sql = "INSERT INTO DocumentosAlumno (doc_nombre, doc_fase, doc_idAlumno) VALUES ('$archivoNombre','$fase',$idAlumno)";
	    
	    $query = mysqli_query($conectado,$sql);
	   
	   	if ($query)
	   	{		
			$ruta = '../../archivos/'.$idAlumno.'/';
			$archivo = $ruta.$_FILES["archivo"]["name"];
			
			if(!file_exists($ruta)){
				mkdir($ruta);
			}
			
			if(!file_exists($archivo)){
				
				$resultado = @move_uploaded_file($_FILES["archivo"]["tmp_name"], $archivo);
				
				if($resultado){
					echo '{
						"STATUS" : 0,
						"MENSAJE" : "Guardado con exito"
						}';
				} else {
					echo '{
						"STATUS" : 1,
						"MENSAJE" : "No se pudo guardar el Archivo"
						}';
				}
				
			} else {
				echo '{
						"STATUS" : 1,
						"MENSAJE" : "Archivo ya existente"
					 }';
			}
	   	}else{
	   		echo '{
						"STATUS" : 1,
						"MENSAJE" : "Error al guardar"
					 }';
	   	} 
 	}
?>			