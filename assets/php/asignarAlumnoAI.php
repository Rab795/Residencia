<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idAsesor = intval($_POST["idAsesor"]);
	$idAlumno = intval($_POST["idAlumno"]);
   

	// REGISTER data into database
    $sql = "UPDATE Alumnos SET
			alu_idAsesorInterno = $idAsesor
			WHERE alu_id = $idAlumno";
    
    $query = mysqli_query($conectado,$sql);
    // if product has been added successfully
    if ($query) {
        echo '{
				"STATUS" : 0,
				"MENSAJE" : "Asignado con exito"
				}';
    } else {
        echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo asignar el registro"
				}'; echo mysqli_error($conectado);
				
    }
?>			