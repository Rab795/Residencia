<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idCV = intval($_POST["idCV"]);
	$idHabilidad = intval($_POST["idHab"]);
	$porcentaje = intval($_POST["porcentaje"]);

	// REGISTER data into database
    $sql = "UPDATE CV_Habilidades SET cvh_porcentaje = $porcentaje WHERE cvh_idCV = $idCV AND cvh_idHab = $idHabilidad";
    
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