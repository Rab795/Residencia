<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$id = intval($_POST["id"]);
	$tipo = mysqli_real_escape_string($conectado,(strip_tags($_POST["tipo"],ENT_QUOTES)));
   

	// REGISTER data into database
	switch ($tipo) {
	    case "Proyecto":
	        $sql = "UPDATE Alumnos SET alu_idProyecto = NULL WHERE alu_id = $id";
	        break;
	    case "AsesorInterno":
	        $sql = "UPDATE Alumnos SET alu_idAsesorInterno = NULL WHERE alu_id = $id";
	        break;
	    case "AsesorExterno":
	        $sql = "UPDATE Alumnos SET alu_idAsesorExterno = NULL WHERE alu_id = $id";
	        break;
	}
    
    
    $query = mysqli_query($conectado,$sql);
    // if product has been added successfully
    if ($query) {
        echo '{
				"STATUS" : 0,
				"MENSAJE" : "Denegado con exito"
				}';
    } else {
        echo '{
				"STATUS" : 1,
				"MENSAJE" : "Error No se pudo denegar"
				}';
				
    }
?>			