<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idEmpresa = intval($_POST["idEmpresa"]);

	// REGISTER data into database
    $sql = "DELETE FROM Empresa WHERE emp_id = $idEmpresa";
    
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