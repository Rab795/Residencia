<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idAsesor = intval($_POST["idAsesor"]);

	// REGISTER data into database
    $sql = "DELETE FROM AsesesorInterno WHERE asi_id = $idAsesor";
    
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
?>			