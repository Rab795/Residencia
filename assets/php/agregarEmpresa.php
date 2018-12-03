<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

    $nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST["nombre"],ENT_QUOTES)));
	$rfc = mysqli_real_escape_string($conectado,(strip_tags($_POST["rfc"],ENT_QUOTES)));
	$direccion = mysqli_real_escape_string($conectado,(strip_tags($_POST["direccion"],ENT_QUOTES)));
	$telefono = mysqli_real_escape_string($conectado,(strip_tags($_POST["telefono"],ENT_QUOTES)));
	$ramo = mysqli_real_escape_string($conectado,(strip_tags($_POST["ramo"],ENT_QUOTES)));

	// REGISTER data into database
    $sql = "INSERT INTO Empresa (emp_nombre,emp_RFC,emp_direccion,emp_ramo,emp_tel)
			VALUES ('$nombre','$rfc','$direccion','$telefono','$ramo')";
    
    $query = mysqli_query($conectado,$sql);
    // if product has been added successfully 
    if ($query) {
        $sql2 = "SELECT emp_id FROM Empresa ORDER BY emp_id DESC LIMIT 1";
        $query2 = mysqli_query($conectado,$sql2);
		$datos = mysqli_fetch_array($query2,MYSQLI_ASSOC);
		$idEmpresa = $datos['emp_id'];

		echo '{
		"ID" : '.$idEmpresa.',
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