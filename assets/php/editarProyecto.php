<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idProyecto = intval($_POST["idProyecto"]);
    $titulo = mysqli_real_escape_string($conectado,(strip_tags($_POST["titulo"],ENT_QUOTES)));
	$descripcion = mysqli_real_escape_string($conectado,(strip_tags($_POST["descripcion"],ENT_QUOTES)));
	$departamento = mysqli_real_escape_string($conectado,(strip_tags($_POST["departamento"],ENT_QUOTES)));
	$asesorE =  intval($_POST["asesorE"]);
	$asesorI =  intval($_POST["asesorI"]);
	$periodo =  intval($_POST["periodo"]);
	$status = mysqli_real_escape_string($conectado,(strip_tags($_POST["status"],ENT_QUOTES)));

	if ($asesorE === 0) { $asesorE = 'NULL'; }

	// REGISTER data into database
    $sql = "UPDATE Proyecto SET
			pro_nombre = '$titulo',
			pro_descripcion = '$descripcion',
			pro_departamento = '$departamento',
			pro_status = '$status',
			pro_idAsesorInterno = $asesorI,
			pro_idAsesorExterno = $asesorE,
			pro_idPeriodo = $periodo
			WHERE pro_id = $idProyecto";
    
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