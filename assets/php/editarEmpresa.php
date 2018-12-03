<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$id = intval($_POST["id"]);
    $nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST["nombre"],ENT_QUOTES)));
	$rfc = mysqli_real_escape_string($conectado,(strip_tags($_POST["rfc"],ENT_QUOTES)));
	$direccion = mysqli_real_escape_string($conectado,(strip_tags($_POST["direccion"],ENT_QUOTES)));
	$telefono = mysqli_real_escape_string($conectado,(strip_tags($_POST["telefono"],ENT_QUOTES)));
	$ramo = mysqli_real_escape_string($conectado,(strip_tags($_POST["ramo"],ENT_QUOTES)));

	// REGISTER data into database
    $sql = "UPDATE Empresa SET
			emp_nombre = '$nombre',
			emp_RFC = '$rfc',
			emp_direccion = '$direccion',
			emp_ramo = '$ramo',
			emp_tel = '$telefono'
			WHERE emp_id = $id";
    
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