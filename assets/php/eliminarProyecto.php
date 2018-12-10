<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idProyecto = intval($_POST["idProyecto"]);

	// REGISTER data into database
    $sql = "DELETE FROM Proyecto WHERE pro_id = $idProyecto";
    
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