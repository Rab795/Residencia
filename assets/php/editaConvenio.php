<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$idConvenio = intval($_POST["idConvenio"]);
	$NoEstudiantes = intval($_POST["NoEstudiantes"]);
	$jornada = mysqli_real_escape_string($conectado,(strip_tags($_POST['jornada'], ENT_QUOTES)));
	$horario = mysqli_real_escape_string($conectado,(strip_tags($_POST['horario'], ENT_QUOTES)));
	$duracion = mysqli_real_escape_string($conectado,(strip_tags($_POST['duracion'], ENT_QUOTES)));

	// REGISTER data into database
    $sql = "UPDATE Convenio SET
			con_noEstudiantes = $NoEstudiantes,
			con_jornada = '$jornada',
			con_horario = '$horario',
			con_duracion = '$duracion'
			WHERE con_id = $idConvenio";
    
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