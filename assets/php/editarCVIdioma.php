<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idCV = intval($_POST["idCV"]);
	$idIdioma = intval($_POST["idIdioma"]);
	$porcentaje = intval($_POST["porcentaje"]);

	// REGISTER data into database
    $sql = "UPDATE CV_Idiomas SET cvi_porcentaje = $porcentaje WHERE cvi_idCV = $idCV AND cvi_idIdioma = $idIdioma";
    
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