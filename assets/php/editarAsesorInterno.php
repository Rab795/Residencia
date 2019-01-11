<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$id = intval($_POST["id"]);
    $nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST["nombre"],ENT_QUOTES)));
	$apaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["apaterno"],ENT_QUOTES)));
	$amaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["amaterno"],ENT_QUOTES)));
	$especialidad = mysqli_real_escape_string($conectado,(strip_tags($_POST["especialidad"],ENT_QUOTES)));
	$carrera = intval($_POST["carrera"]);

	if ($carrera === 0) { $carrera = 'NULL'; }

	// REGISTER data into database
    $sql = "UPDATE AsesesorInterno
			SET
			asi_nombre = '$nombre',
			asi_aPaterno = '$apaterno',
			asi_aMaterno = '$amaterno',
			asi_especialidad = '$especialidad',
			asi_IdCarrera = $carrera
			WHERE asi_id = $id";
    
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