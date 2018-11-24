<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idPA = intval($_POST["idPA"]);
	$servicoSocial = intval($_POST["servicoSocial"]);
	$creditos = intval($_POST["creditos"]);
	$promedio = floatval($_POST["promedio"]);
	$semestre = intval($_POST["semestre"]);
	$idEsp = intval($_POST["idEsp"]);

	if ($idEsp === 0) { $idEsp = 'NULL'; }

	// REGISTER data into database
    $sql = "UPDATE PerfilAcademico SET
			pad_servicioSocial = $servicoSocial,
			pad_creditos = $creditos,
			pad_promedio = $promedio,
			pad_semestre = $semestre,
			pad_idEspecialidad = $idEsp 
			WHERE pad_id = $idPA";
    
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