<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

 	$idAlumno = intval($_POST["idAlumno"]);
 	$idHabilidad = intval($_POST["idHab"]);
	$porcentaje = floatval($_POST["porcentaje"]);

	$sql1 = "SELECT cv_id FROM CurriculumVitae WHERE cv_idAlumno = $idAlumno";
	$query1 = mysqli_query($conectado,$sql1);
	$datos = mysqli_fetch_array($query1,MYSQLI_ASSOC);
	$idCV = $datos['cv_id']; 

	// REGISTER data into database
    $sql2 = "INSERT INTO CV_Habilidades (cvh_idCV,cvh_idHab,cvh_porcentaje) VALUES ($idCV,$idHabilidad,$porcentaje)";
    
    $query2 = mysqli_query($conectado,$sql2);
    // if product has been added successfully
    if ($query2) {
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