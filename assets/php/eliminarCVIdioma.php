<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idCV = intval($_POST["idCV"]);
	$idIdioma = intval($_POST["idIdioma"]);

	// REGISTER data into database
    $sql = "DELETE FROM CV_Idiomas WHERE cvi_idCV = $idCV AND cvi_idIdioma = $idIdioma";
    
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
				}'; echo mysqli_error($conectado);
				
    }
?>			