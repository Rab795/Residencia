<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

    $nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST["nombre"],ENT_QUOTES)));
	$apaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["apaterno"],ENT_QUOTES)));
	$amaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["amaterno"],ENT_QUOTES)));
	$especialidad = mysqli_real_escape_string($conectado,(strip_tags($_POST["especialidad"],ENT_QUOTES)));
	$carrera = intval($_POST["carrera"]);

	if ($carrera === 0) { $carrera = 'NULL'; }

	// REGISTER data into database
    $sql = "INSERT INTO AsesesorInterno
			(asi_nombre,
			asi_aPaterno,
			asi_aMaterno,
			asi_especialidad,
			asi_idInstitucion,
			asi_IdCarrera)
			VALUES
			('$nombre','$apaterno','$amaterno','$especialidad',1,$carrera)";
    
    $query = mysqli_query($conectado,$sql);
    // if product has been added successfully 
    if ($query) {	
		echo '{
		"STATUS" : 0,
		"MENSAJE" : "Guardado con exito"
		}';
		
    } else {
        echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo guardar el registro"
				}'; echo mysqli_error($conectado);
    }
?>			